// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.


const logObject = {
  logMsg: function(){
    console.log(this.errMsg)
  }
};
const errObject = {
    errMsg: "Hi, I am an error!!"
}

logObject.logMsg.call(errObject)