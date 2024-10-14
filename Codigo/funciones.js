
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

function validar(){
    var nombre = document.miformulario.nombre.value.trim();

    if(!nombre.match(/^[A-Z a-z\s]+$/) || nombre.length<6){
        document.miformulario.nombre.focus();
        alert("nombre invalido");
        return false;
    }
    
    var telefono = document.miformulario.telefono.value;
    
    if(Number.isInteger(telefono)|| telefono.length<10){
        document.miformulario.telefono.focus();
        alert("Ingrese solo numeros");
        
        return false;
    } 
     
    var c = false;
   /* var test = document.getElementByName("servicio");*/
    
    for(var x=0; x<document.miformulario.servicio.length;x++){
        if(document.miformulario.servicio[x].checked){
            c=true;
            break;
        }
    }   
    if(!c){
        alert("Seleccione un Servicio");
        return false;
    }
    
    
    var op = document.miformulario.manicura.selectedIndex;
    if(op==-1){
       alert("Debe ingresar por quien sera atendido");
            document.miformulario.manicura.focus();
            return false;
       }
    
    
    var r = false;
    
    for(var i=0;i<document.miformulario.sexo.length;i++){
        if(document.miformulario.sexo[i].checked){
            r=true;
            document.miformulario.sexo.focus();
            break;
        }
    }
    if(!r){
        alert("Seleccione Sexo");
        return false;
    }
    
   return true; 

}




