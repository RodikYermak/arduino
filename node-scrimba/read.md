New Scrimba course - Node js

3 ways users can get data:
01 /api
02 /api/country/india
03 /api?country=turkey&is_open_to_public=true

We will be studying:
The core HTTP module
    creating server
    sending status codes(200, 400, etc.)
    setting headers
    handling requests/responses
    filtering data
    extracting query params

Package.json is the blueprint!
    Contains metadata(name, version, author, description, etc.)
    Simplifies collaboration
        Manages dependencies
        Defining start script

The HTTP Module
    Allows data to be transferred over the HTTP protocol
    Create servers
    Handle requests from clients
    Provide responses to those requests

The response object
    Has methods which allow us to:
        specify content-type
        set status codes(200, 400, etc.)
        provide content(html, JSON, images)

REQUEST
    Method: GET
    Request Path: /api
    Data: query string/path params

HANDLE REQUEST
    Filtering data
    Throwing an error
    Generate a response

RESPONSE
    Resource (JSON)
    Content-Type (application/json)
    Status code: 200, 404, etc
    Status messages: OK

The Request Object
    Gives us access to the incoming request
        The url the client used
        The headers
        Any data sent
        The method (GET, POST, DELETE)

HTTP is a text-based protocol. All data transferred between the client and the server must be in the form of strings.

JSON.stringify(<data-to-convert>)

Content-Types (Mime types)
    application/json
    text/html
    text/css
    application/javascript

Query parameneters
sending key value pairs
/api?name=tom&country=uk

const queryParams = {
    Name: 'tom',
    country: 'uk'
}

SAME-ORIGIN POLICY
By default, browsers enforce a same-origin policy. This means requests can only be made to the same protocol, domain, and port as the one serving the web page.

Protocol        Domain          Port
HTTP            scrimba.com     8000
HTTPS           mozilla.org     3000

Cross-origin resource sharing (CORS)

No need to set CORS
Server and Frontend
http://scrimba.com:3000