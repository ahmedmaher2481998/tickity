<!-- Section 6 normalize Response  -->

5.  - the express validator is sending an error that's not stander
    - we need to normalize the error response
    - the react should expect a fixed error shape
    - we have to normalize the response to a fixed shape from all the services
6.  - currently only taking about validation errors , but we will handle all errors the same way
    - other logical errors too ,there's a lot of error layers validation level ,app level ,DB level
7.  - now we need to use the error object to transfer more error info to the middleware
    - we will ad a reasons property to the Error class to satisfy TS-server/complier
    - we can extended or so and the format the error in middleware
8.  -

    - make a seralize Errors methon and add status code propperty to the error classes
    - make a new abstract class custom error class and use it in instence of check in the error middleware
    - add not found error , rethink the app artechture
    -
    -

9.  -
    -
    -
    -
    -
    -
