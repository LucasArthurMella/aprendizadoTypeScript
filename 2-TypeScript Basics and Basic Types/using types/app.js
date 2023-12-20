var userInput;
var userName;
userInput = 5;
userInput = "Max";
userInput = 3;
if (typeof userInput == "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
