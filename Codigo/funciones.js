
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
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreApellido = document.getElementById('nombre-apellido').value;
  const servicioElegido = document.getElementById('servicio-elegido').value;
  const email = document.getElementById('email').value;
  const fechaElegida = document.getElementById('fecha-elegida').value;

  if (nombreApellido === '' || servicioElegido === '' || email === '' || fechaElegida === '') {
    alert('Por favor, complete todos los campos');
  } else {
    alert('Formulario enviado con éxito!');
  }
});



