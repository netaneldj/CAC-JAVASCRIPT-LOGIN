function validate() {  
    var arroba=document.login.usuario.value.indexOf("@");
    if (arroba < 1) {  
        alert("Falta el arroba en el usuario");  
        return false;  
    }
    return true;  
}
