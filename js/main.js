var myAge = prompt("How old are you?");
function birthday() {
    var message = "Happy Birthday! You are ";
    message += ++myAge;
    message += " years old.";
    console.log(message);
}

birthday();