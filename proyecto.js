
 var formulario = document.getElementById('formulario')
var boton = document.getElementById('boton')
var nombre = document.getElementById('nombre')
var correo= document.querySelector('#email')
var asunto= document.getElementById('asunto')
var mensaje = document.getElementById('mensaje')
var error_mensaje = document.getElementById('error_mensaje')
var text;

formulario.addEventListener("submit", validando);

function validando(e){
    e.preventDefault()


error_mensaje.style.padding = "10px"

    if (nombre.value.length < 5 ){
      text = "Nome inválido é muito curto";
      error_mensaje.innerHTML = text;
      return false;
}

if (correo.value.indexOf("@") == -1 || correo.value.length < 10 ){
    text = " E-mail inválido, digite o e-mail novamente";
    error_mensaje.innerHTML = text;
    return false;
}

if (asunto.value.length < 5){
    text = "Por favor insira um assunto";
    error_mensaje.innerHTML = text;
    return false;
}

if (mensaje.value.length < 15){
    text = "Mensagem incompleta";
    error_mensaje.innerHTML = text;
    return false;
}



return false;




}




