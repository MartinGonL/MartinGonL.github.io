
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

document.addEventListener('DOMContentLoaded', (l) => {
  const datoForm = document.getElementById('formulario');

  datoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let errores = true;

    const nombreApellido = document.getElementById('nombre-apellido');
    const servicioElegido = document.getElementById('servicio-elegido');
    const email = document.getElementById('email');
    const fechaElegida = document.getElementById('fecha-elegida');
    const telefono = document.getElementById('telefono'); // Campo de teléfono

    const nombreApellidoError = document.getElementById('nombre-apellido-error');
    const servicioElegidoError = document.getElementById('servicio-elegido-error');
    const emailError = document.getElementById('email-error');
    const fechaElegidaError = document.getElementById('fecha-elegida-error');
    const telefonoError = document.getElementById('telefono-error'); // Error para el teléfono

    // Validación de Nombre y Apellido
    if (nombreApellido.value == '' || nombreApellido.value.length < 5 || nombreApellido.value.length > 20) {
      nombreApellidoError.textContent = 'Por favor, ingrese su nombre y apellido, mínimo 5 caracteres y máximo 20.';
      errores = false;
    } else {
      nombreApellidoError.textContent = '';
    }

    // Validación de Servicio Elegido
    if (servicioElegido.value == '') {
      servicioElegidoError.textContent = 'Por favor, seleccione un servicio';
      errores = false;
    } else {
      servicioElegidoError.textContent = '';
    }

    // Validación de Email
    if (email.value == '' || !(/^[\w-]+@[\w-]+\.(com|com\.ar)$/.test(email.value))) {
      emailError.textContent = 'Por favor, ingrese su correo. Ej: xxxx@xxxx.com o xxxx@xxxx.com.ar';
      errores = false;
    } else {
      emailError.textContent = '';
    }

    // Validación de Fecha Elegida
    if (fechaElegida.value == '') {
      fechaElegidaError.textContent = 'Por favor, seleccione una fecha';
      errores = false;
    } else {
      fechaElegidaError.textContent = '';
    }

    // Validación de Teléfono
    if (telefono.value.length < 10 || !/^\d+$/.test(telefono.value)) {
      telefonoError.textContent = 'El número de teléfono debe tener al menos 10 dígitos y solo contener números.';
      errores = false;
    } else {
      telefonoError.textContent = '';
    }

    // Si no hay errores, procesar el formulario
    if (errores) {
      let mensaje = '';
      mensaje = `<li>${nombreApellido.value} solicitó ${servicioElegido.value} para el día ${fechaElegida.value}. Contacto: ${email.value}, Teléfono: ${telefono.value}</li>`;
      document.getElementById('lista-mensajes').innerHTML += mensaje;

      // Resetear los valores del formulario
      nombreApellido.value = '';
      servicioElegido.value = '';
      email.value = '';
      fechaElegida.value = '';
      telefono.value = ''; // Resetear teléfono
    }
  });
});





