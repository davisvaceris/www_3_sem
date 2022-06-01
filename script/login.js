console.log('HELLO');
const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{6,32}/gi);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/gi);
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginh = document.getElementById("login");
function login(username, password) {
    alert(username + " "+password);
    if (username_regex.test(username)||!username==("Davis")||!username==("Inga")) {
        alert("Please enter a username");

        
    }
    else{
         if(password_regex.test(password)||!password==("Vaceris")||!password==("Vilumsone")){
            alert("Please enter a password");
        }
        else{
            alert("SUCCESS");
        }
    }
}
loginh.onclick=()=>{
    alert(password_regex.test(password.value));
    login(username.value,password.value);
}