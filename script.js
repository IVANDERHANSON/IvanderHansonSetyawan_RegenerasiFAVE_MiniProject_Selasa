let validName = document.getElementById('validName');
let validEmail = document.getElementById('validEmail');
let validMessage = document.getElementById('validMessage');

let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let Message = document.getElementById('Message');

// let Regex = ;;

function checkName() {
    if(Name.value.length == 0) {
        validName.innerHTML = "Please input this field.";
    }
    else if(Name.value.length < 3) {
        validName.innerHTML = "Minimal input is 3 characters.";
    }
}

function checkEmail() {
    if(Email.value.length == 0) {
        validEmail.innerHTML = "Please input this field.";
    }
    else if(Email.value != Regex) {

    }
    
}

function checkMessage() {
    if(Message.value.length == 0) {
        validMessage.innerHTML = "Please input this field.";
        console.log("Please input this field.");
    }
    else if(Message.value.length < 3) {
        validMessage.innerHTML = "Minimal input is 3 characters.";
    }
}