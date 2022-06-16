var email=document.getElementById("email")
var username=document.getElementById("username")
var password=document.getElementById("password")
var password2=document.getElementById("repassword")
var policies=document.getElementById("policies")


if(sessionStorage.getItem('e',{path:'/'})!==null&&sessionStorage.getItem('u',{path:'/'})!==null){
    email.value=sessionStorage.getItem('e',{path:'/'});
    username.value=sessionStorage.getItem('u',{path:'/'});
    sessionStorage.removeItem('e',{path:'/'});
    sessionStorage.removeItem('u',{path:'/'});
}

const email_reg = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
const username_regex = new RegExp (/[a-zA-Z][a-zA-Z0-9-_]{5,32}/i);
const password_regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,32}/i);

function getsess(){
    
}

register.onclick=()=>{    
    var us_bol= !username_regex.test(username.value)
    var pas_bol= !password_regex.test(password.value)
    var em= !email_reg.test(email.value);

    if(em){AcceptOrReject(email, "reject", "accept");}
    else{AcceptOrReject(email, "accept", "reject");}

    if(us_bol){AcceptOrReject(username, "reject", "accept");}
    else{AcceptOrReject(username, "accept", "reject");}

    if(pas_bol){AcceptOrReject(password, "reject", "accept");}
    else{AcceptOrReject(password, "accept", "reject");}

    if(!password.value==password2.value||password2.value==null||password2.value==""){AcceptOrReject(password2, "reject", "accept");}
    else{AcceptOrReject(password2, "accept", "reject");}
    
    if(!policies.checked){AcceptOrReject(policies, "reject", "accept");}
    else{AcceptOrReject(policies, "accept", "reject");}

    if(!em&&!us_bol&&!pas_bol&&password.value==password2.value&&policies.checked){
        document.body.style.cursor='wait';
        sleep(5000);
        console.log("Registred successfully");
        window.location.replace('index.html');

    }
}
function AcceptOrReject(element, option1, option2){
    if(element.classList.contains(option1)){}
    else if( element.classList.contains(option2)){element.classList.replace(option2, option1);}
    else{element.classList.add(option1);}
}

var priv_href= document.getElementsByClassName('privacy');

function tempsave(){
    sessionStorage.setItem('e',email.value);
    sessionStorage.setItem('u',username.value);
    }

priv_href[0].onclick=()=>{
    tempsave();
    window.location.replace('privacy.html');
}
    priv_href[1].onclick=()=>{
    tempsave();
    window.location.replace('privacy.html');
}
document.getElementById('cancel').onclick=()=>{clearsession();}

function clearsession(){
    window.location.replace('index.html');
}