# Backend Web Development Application
### Ryan Brower

## Features:

* Basic CRUD operations
* Error handling:
    - Internal exceptions will be logged to the Render console.
    - Errors from invalid requests are returned in response.
* Data Validation:
    - On POST requests, both names and email fields are required and strings. Email must be in valid email format.
    - On PUT requests, data not specified in the request will remain unchanged.
* A timestamp is added to each POST request that cannot be modified with PUT.

### Needs doing:

* Custom response message for invalid ID (currently responds 400 with no content)
