const { v4: uuidv4 } = require('uuid');

const customers = {};

const displayCustomerInfo = (req, res) => {
    res.send({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmmail.com',
    });

    res.status(200);
};

const addCustomerInfo = (req, res) => {
    try {
        const data = req.body;
        let customerId = uuidv4();

        if (data.id) {
            customerId = data.id;
            if (customers[customerId]) {
                return res.status(409).json({ message: 'Customer with this ID already exists' });
            }
        }

        data.id = customerId;
        customers[customerId] = data;
        res.status(201).json(data);
    } catch (e) {
        console.log(err);
        res.status(500).json({ message: 'Error' });
    }
};

module.exports = {
    addCustomerInfo,
    displayCustomerInfo,
};
