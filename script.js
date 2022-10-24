const openClose = document.getElementById("open-close"),
      aside = document.getElementById("aside");

openClose.addEventListener("click",()=>{
    aside.classList.toggle("desplegar")
    
})

function mostrarContenido(){
    document.getElementById('contenido').style.display= 'block';
    document.getElementById('button').style.display= 'none';

}
