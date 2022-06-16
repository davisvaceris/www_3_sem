
    var nav_main = document.getElementById("nav_main");
    var logout =document.getElementById("logout");
    var loc = window.location.pathname;
    var file = loc.substring(loc.lastIndexOf('/')+1, loc.lastIndexOf('.'));
    var home= false;
    
 if(Cookies.get('username',{path:'/'})==null&&sessionStorage.getItem('username',{path:'/'})==null&&file!="privacy"){ window.location.replace('index.html') }
 if(file=="home"){var greet = document.getElementById("greetings"); home=true;}
//if cookies is checked then
 if(Cookies.get('username',{path:'/'})!=null){
    var usr=Cookies.get('username',{path:'/'});
    nav_main.innerHTML =usr;
    if(home){   greet.innerHTML = "Hello, " + usr+ "!";}
   logout.onclick = function(){
       Cookies.remove('username');
       Cookies.remove('login');
       window.location.replace('index.html')
   }
 }
 //if sessionStorage is used
 else{
     var usr= sessionStorage.getItem('username',{path:'/'});
     nav_main.innerHTML =usr;
     if(home){greet.innerHTML = "Hello, " + usr+ "!";}
     logout.onclick = function(){
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('login');
         window.location.replace('index.html')
     }
 }


 var btn_home = document.getElementById("nav_home");
 var btn_info = document.getElementById("nav_info");
 var btn_blog = document.getElementById("nav_blog");
 var btn_user = document.getElementById("nav_profile");
 var btn_user_set = document.getElementById("nav_settings");
 var btn_user_recom = document.getElementById("nav_recom");
 var btn_contacts = document.getElementById("nav_contacts");

