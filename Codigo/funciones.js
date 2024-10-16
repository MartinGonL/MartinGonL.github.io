
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
 // Obtener los elementos del formulario
 const formulario = document.getElementById('formulario');
 const nombreInput = document.getElementById('nombre');
 const servicioInput = document.getElementById('servicio');
 const emailInput = document.getElementById('email'); 

 // Función para validar el formulario
 formulario.addEventListener('submit', function(event) {
     event.preventDefault();
     let errores = false;

     // Validar nombre de usuario
     if (nombreInput.value == '' || nombreInput.value.length > 20) {
         document.getElementById('error-nombre').innerHTML = '*campo obligatorio, maximo 20 carracteres';
         nombreInput.classList.add('error-input');
         errores = true;
     } else {
         document.getElementById('error-nombre').innerHTML = '';
         nombreInput.classList.remove('error-input');
     }

     // Validar servicio
     if (peliculaInput.value== '' || peliculaInput.value.length > 200) {
         document.getElementById('error-servicio').innerHTML = '*campo obligatorio, maximo 200';
         peliculaInput.classList.add('error-input');
         errores = true;
     } else {
         document.getElementById('error-servicio').innerHTML = '';
         peliculaInput.classList.remove('error-input');
     }

     // Validar email
     if (emailInput.value !== '') {
         if (emailInput.value.match (/^[\w-]@(\w-)+(.com(\.ar)|go[vb])$/)) {
             document.getElementById('error-email').innerHTML = '*El email es inválido';
             emailInput.classList.add('error-input');
             errores = true;
         } else {
             document.getElementById('error-email').innerHTML = '';
             emailInput.classList.remove('error-input');
         }
     }

     // Mostrar mensaje de éxito
     if (!errores) {
         let mensaje = '';        
           mensaje = `<li>${nombreInput.value} solicita: ${servicioInput.value}. Contacto: ${emailInput.value}</li>`;
         } 
         document.getElementById('lista-mensajes').innerHTML += mensaje;

         // Limpiar campos y errores
         nombreInput.value = '';
         servicioInput.value = '';         
         emailInput.value = '';
         document.getElementById('error-nombre').innerHTML = '';
         document.getElementById('error-servicio').innerHTML = '';        
         document.getElementById('error-email').innerHTML = '';
         nombreInput.classList.remove('error-input');
         servicioInput.classList.remove('error-input');         
         emailInput.classList.remove('error-input');

         // Hacer foco en el primer input
         nombreInput.focus();
     }
 });




