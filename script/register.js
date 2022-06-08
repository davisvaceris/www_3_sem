const email_reg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/gi);
const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{5,32}/gi);

var email=document.getElementById("email")
var username=document.getElementById("username")
var password=document.getElementById("password")
var password2=document.getElementById("repassword")
var policies=document.getElementById("policies")

function validate(email, username, password, password2, policies){
    if(!email_reg.test(email)){

    }
    else if(!username_regex.test(username)){

    }
    else if(!password_regex.test(password)){

    }
    else if(!password==password2){

    }
    else if(!policies.checked){

    }else{
        alert("SUCCESS")
    }
}