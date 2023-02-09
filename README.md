# Backend Web Development Application
### Ryan Brower

## Features include:

* Basic CRUD operations
* Error handling:
    - Internal exceptions will be logged to the Render console.
    - Errors from invalid get requests are returned in response.
    - Failures in PUT or DELETE requests are returned to user.
* Data Validation:
    - On POST requests, both names and email fields are required and strings. Email must be in valid email format.
    - On PUT requests, data not specified in the request will remain unchanged.
* A timestamp is added to each POST request that cannot be modified with PUT.