
var arrayimg = ['Imagenes/contenedor/imagen1nueva.jpg','Imagenes/contenedor/imagen2nueva.jpg','Imagenes/contenedor/imagen3nueva.jpg','Imagenes/contenedor/imagen4nueva.jpg','Imagenes/contenedor/imagen5nueva.jpg','Imagenes/contenedor/imagen6nueva.jpg','Imagenes/contenedor/imagen7nueva.jpg','Imagenes/contenedor/imagen8nueva.jpg','Imagenes/contenedor/imagen9nueva.jpg','Imagenes/contenedor/imagen10nueva.jpg'];

var n =0;
function adelante(){
    n++;

    if(n>9){
        n=0; 
    }
    
    var form = document.getElementById("form1");
    form.principal.setAttribute('src', arrayimg[n]);
 }
function atras(){

    n--;

    if(n==-1){
        n=9;
    }else if(n<0){
        n=9;
    }
    
    var form = document.getElementById("form1");
    form.principal.setAttribute('src', arrayimg[n]);  
}

function principal(){
    
    var form = document.getElementById("form1");
    form.principal.setAttribute('src', arrayimg[n]); 
    
}


/*-----------validaciones de forulario-----------*/
document.addEventListener ('DOMContentLoaded', (l) => {
const datoForm = document.getElementById('formulario');

datoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let errores = true;
  
  const nombreApellido = document.getElementById('nombre-apellido');
  const servicioElegido = document.getElementById('servicio-elegido');
  const email = document.getElementById('email');
  const fechaElegida = document.getElementById('fecha-elegida');

  const nombreApellidoError = document.getElementById('nombre-apellido-error');
  const servicioElegidoError = document.getElementById('servicio-elegido-error');
  const emailError = document.getElementById('email-error');
  const fechaElegidaError = document.getElementById('fecha-elegida-error');

  

  if (nombreApellido.value == '' || nombreApellido.value.length < 5 || nombreApellido.value.length > 20) {
    nombreApellidoError.textContent = 'Por favor, ingrese su nombre y apellido';
    errores = false;
  } else {
    nombreApellidoError.textContent = '';
  }

  if (servicioElegido.value == '') {
    servicioElegidoError.textContent = 'Por favor, seleccione un servicio';
    errores = false;
  } else {
    servicioElegidoError.textContent = '';
  }

  if (email.value == '' || !(/^[\w-]+@[\w-]+\.(com)|(com(\.ar))$/.test(email.value))){
    emailError.textContent = 'Por favor, ingrese su correo electrónico';
    errores = false;
  } else {
    emailError.textContent = '';
  }

  if (fechaElegida.value == '') {
    fechaElegidaError.textContent = 'Por favor, seleccione una fecha';
    errores = false;
  } else {
    fechaElegidaError.textContent = '';
  }
  
  if (errores) {
    let mensaje = '';
    mensaje = `<li>${nombreApellido.value} solicito ${servicioElegido.value} para el dia ${fechaElegida.value}. Contacto: ${email.value}</li>`;
    document.getElementById('lista-mensajes').innerHTML += mensaje;

    nombreApellido.value= '';
    servicioElegido.value= '';
    email.value= '';
    fechaElegida= '';  
      
  }
  
});

});

