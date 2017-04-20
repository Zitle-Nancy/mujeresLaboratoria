//obtener el body :D
var hoja = document.getElementsByTagName("BODY")[0];
var foto;
var contador = 0;
// var imagenCoder = document.getElementsByClassName('imagenes');
// var longitud = imagenCoder.length;
// console.log(imagenCoder);
//crear elementos
var section = document.createElement('section');
//dar propiedades a los elementos
//section
section.style.width = "600px";
section.style.height = "500px";
section.style.border = "thick solid #0000FF"; //le puedes poner un 1px y si lo lee
//fin de la section
//crear una funcion para las imagenes
var fotos = function(){
	contador++;	
	// console.log(contador);
	var foto1 = document.createElement('img');
	var ruta = "assets/img/" + contador + ".jpg";
	console.log(ruta); 
	foto1.src = ruta;
	foto1.className = "imagenes";
	foto1.style.width = "100px";
	foto1.style.height = "100px";
	foto1.style.position = "relative";
	return foto1;
}
//funcion de los div 
var cuadros = function(color,ancho,altura,posicion,alineamiento,valorTop,valorRight,valorLeft,valorBottom,marginLeft){
	var cuadro = document.createElement('div');
	cuadro.style.border = color;
	cuadro.style.width = ancho;
	cuadro.style.height = altura;
	cuadro.style.position = posicion;
	cuadro.style.display = alineamiento;
	cuadro.style.top = valorTop;
	cuadro.style.right = valorRight;
	cuadro.style.left = valorLeft;
	cuadro.style.bootom = valorBottom;
	cuadro.style.marginLeft = marginLeft;
	cuadro.appendChild(fotos());	 
	section.appendChild(cuadro);
}
cuadros('10px solid red','200px','100px','relative','inline-block','100px','0','0','50px','80px');	
cuadros('10px solid green','200px','100px','relative','inline-block','100px','0px','150','50px','80px');	
cuadros('10px solid purple','100px','100px','relative','inline-block','100px','0px','250','50px');	
cuadros('10px solid yellow','100px','100px','relative','inline-block','100px','0px','300px','50px');	
cuadros('10px solid grey','100px','100px','relative','inline-block','100px','0px','450','50px');	
cuadros('10px solid black','100px','100px','relative','inline-block','100px','0px','550','50px');	
//dibujar
hoja.appendChild(section);

