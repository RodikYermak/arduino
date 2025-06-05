const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.3',
    info: {
        title: 'Simple CustomerInfo API',
        version: '1.0.0',
        description: 'This is the customer api for initial',
        contact: {
            email: 'rodion.yermakov.sd@gmail.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Development server',
        },
    ],
    paths: {
        '/CustomerInfo': {
            get: {
                summary: 'gets a customers basic information',
                description:
                    'By passing in the Customers unique identifier you will get that users basic information\n',
                operationId: 'searchCustomers',
                parameters: [
                    {
                        name: 'searchString',
                        in: 'query',
                        description: 'pass an optional search string for looking up inventory',
                        required: false,
                        style: 'form',
                        explode: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'search results matching criteria',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/CustomerBasicInfo',
                                    },
                                    'x-content-type': 'application/json',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Could not find the customer',
                    },
                },
                'x-swagger-router-controller': 'Default',
            },
            post: {
                summary: 'adds CustomerInfo',
                description: 'Adds CustomerInfo to the system',
                operationId: 'addCustomerInfo',
                requestBody: {
                    description: 'CustomerInfo to add',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CustomerBasicInfo',
                            },
                        },
                    },
                    required: false,
                },
                responses: {
                    201: {
                        description: 'item created',
                    },
                    400: {
                        description: 'invalid input, object invalid',
                    },
                    409: {
                        description: 'an existing Customer with this id already exists',
                    },
                },
                'x-swagger-router-controller': 'Default',
            },
        },
    },
    components: {
        schemas: {
            MessageInformation: {
                required: ['source'],
                type: 'object',
                properties: {
                    source: {
                        type: 'string',
                        example: 'SwaggerExamplePage',
                    },
                },
                example: {
                    source: 'SwaggerExamplePage',
                },
            },
            CustomerBasicInfo: {
                required: [
                    'assistanceWithInsurance',
                    'county',
                    'dateOfBirth',
                    'familyPlanningBenefits',
                    'firstName',
                    'fixedAddress',
                    'gender',
                    'id',
                    'lastName',
                ],
                type: 'object',
                properties: {
                    messageInformation: {
                        $ref: '#/components/schemas/MessageInformation',
                    },
                    id: {
                        type: 'string',
                        format: 'uuid',
                        example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
                    },
                    firstName: {
                        type: 'string',
                        example: 'Bob',
                    },
                    middleName: {
                        type: 'string',
                        example: 'Robert',
                    },
                    lastName: {
                        type: 'string',
                        example: 'BobsLastName',
                    },
                    dateOfBirth: {
                        type: 'string',
                        format: 'int32',
                        example: '2016-08-29T00:00:00.000Z',
                    },
                    gender: {
                        type: 'string',
                        example: 'Male',
                        enum: ['Female', 'Male', 'Unknown'],
                    },
                    county: {
                        type: 'string',
                        example: 'Anderson',
                    },
                    fixedAddress: {
                        type: 'boolean',
                        example: false,
                    },
                    assistanceWithInsurance: {
                        type: 'boolean',
                        example: false,
                    },
                    familyPlanningBenefits: {
                        type: 'boolean',
                        example: false,
                    },
                    OtherContactInfo: {
                        $ref: '#/components/schemas/OtherContactInfo',
                    },
                },
                example: {
                    firstName: 'Bob',
                    lastName: 'BobsLastName',
                    gender: 'Male',
                    messageInformation: {
                        source: 'SwaggerExamplePage',
                    },
                    OtherContactInfo: {
                        preferredLanguage: 'American Sign',
                        preferredContactMethod: 'email',
                        phone: {
                            areaCode: '408',
                            phoneType: 'Business',
                            preFix: '867',
                            lineNumber: '5309',
                        },
                        alternatePhone: null,
                        email: 'jedwards@nope.com',
                    },
                    fixedAddress: false,
                    familyPlanningBenefits: false,
                    county: 'Anderson',
                    middleName: 'Robert',
                    dateOfBirth: '2016-08-29T00:00:00.000Z',
                    assistanceWithInsurance: false,
                    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
                },
            },
            OtherContactInfo: {
                type: 'object',
                properties: {
                    preferredContactMethod: {
                        type: 'string',
                        example: 'email',
                        enum: ['email', 'phone', 'post'],
                    },
                    phone: {
                        $ref: '#/components/schemas/Phone',
                    },
                    alternatePhone: {
                        $ref: '#/components/schemas/Phone',
                    },
                    email: {
                        type: 'string',
                        example: 'jedwards@nope.com',
                    },
                    preferredLanguage: {
                        type: 'string',
                        example: 'American Sign',
                    },
                },
                example: {
                    preferredLanguage: 'American Sign',
                    preferredContactMethod: 'email',
                    phone: {
                        areaCode: '408',
                        phoneType: 'Business',
                        preFix: '867',
                        lineNumber: '5309',
                    },
                    alternatePhone: null,
                    email: 'jedwards@nope.com',
                },
            },
            Phone: {
                type: 'object',
                properties: {
                    areaCode: {
                        type: 'string',
                        example: '408',
                    },
                    preFix: {
                        type: 'string',
                        example: '867',
                    },
                    lineNumber: {
                        type: 'string',
                        example: '5309',
                    },
                    phoneType: {
                        type: 'string',
                        enum: ['Business', 'Fax', 'Mobile', 'Other', 'Pager', 'Personal'],
                    },
                },
                example: {
                    areaCode: '408',
                    phoneType: 'Business',
                    preFix: '867',
                    lineNumber: '5309',
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
