//CustomError class
class CustomError extends Error{
    constructor (message){
        super(message)
        this.name = 'Custom Error';
    }
}

/* Function throwGenericError() that uses throw to create a generic Error error
with the custom message of "Generic error" */
function throwGenericError() {
    throw new Error ('Generic Error');
};
console.log("Force generic error")
/* A try..catch..finally block that forces the generic error by calling throwGenericError()
 with console.log() debug statements */
try {
    //statement to be executed, any exceptions will brand to catch block
    console.log("Generic error try block")
    throwGenericError();
} catch (err) {
    //statements executed if an exception occurs in the try block
    console.log("Generic error catch block")
    console.log(err.name, ":", err.message)
} finally {
    //statements executed after try block completion regardless of any exceptionsx
    console.log("Generic error finally block")
}

/* Function throwCustomError() that uses throw to create a custom CustomError error
with the custom message of "Custom error" */
function throwCustomError() {
    throw new CustomError ('Custom Error');
};
console.log("Force custom error")
/* 
A try..catch..finally block that forces the custom error by calling throwCustomError()
with console.log() debug statements */
try {
    console.log("Customer error try block")
    throwCustomError();
} catch (err) {
    console.log("Custom error catch block")
    console.log(err.name, ":", err.message)
    
} finally {
    console.log("Custom error finally block")
}
