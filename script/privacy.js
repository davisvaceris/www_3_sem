var login = document.getElementsByClassName('login');
var logout = document.getElementsByClassName('logout');

if(Cookies.get('username',{path:'/'})==null&&sessionStorage.getItem('username',{path:'/'})==null){
        HideOrShow(logout,'visible', 'hiden');
        HideOrShow(login,'hiden', 'visible');
        login[0].remove();
    }
    else{
        HideOrShow(login,'visible', 'hiden');
        HideOrShow(logout, 'hiden','visible');
        logout[0].remove();
    }

function HideOrShow (element, option1, option2) {
    if(element[0].classList.contains(option1)){}
    else if( element[0].classList.contains(option2)){element[0].classList.replace(option2, option1);}
    else{element[0].classList.add(option1);}
}