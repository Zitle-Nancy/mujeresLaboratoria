//obtener el body :D
var hoja = document.getElementsByTagName("BODY")[0];
var imagenCoder = document.getElementsByClassName('imagenes');
console.log(imagenCoder);
//crear elementos
var section = document.createElement('section');
var fotos = document.createElement('img');
//dar propiedades a los elementos
//section
section.style.width = "600px";
section.style.height = "500px";
section.style.border = "thick solid #0000FF"; //le puedes poner un 1px y si lo lee
//fin de la section
//imagenes
fotos.src = "assets/img/1.jpg";
fotos.className = "imagenes";
fotos.style.width = "100px";
fotos.style.height = "100px";
fotos.style.position = "relative";
//fin de imagenes

//crear un for para recorrer las imagenes
// for(var i=0; i < imagenes.length; i++){

// }
//funcion de los div 
var Cuadros = function(color,ancho,altura,posicion,alineamiento,valorTop,valorRight,valorLeft,valorBottom){
	var cuadro = document.createElement('div');
	cuadro.style.border = color;
	cuadro.style.width = ancho;
	cuadro.style.height = altura;
	cuadro.style.position = posicion;
	cuadro.style.display = "inline-block";
	cuadro.style.top = valorTop;
	cuadro.style.right = valorRight;
	cuadro.style.left = valorLeft;
	cuadro.style.bootom = valorBottom;
	// cuadro.src = rutaImagen;
	cuadro.appendChild(fotos);
	section.appendChild(cuadro);

}
Cuadros('1px solid red','100px','100px','relative','100px','0px','100px','50px');	
Cuadros('10px solid purple','100px','100px','relative','100px','0px','150','50px');	
//dibujar
hoja.appendChild(section);
// section.appendChild(fotos);
