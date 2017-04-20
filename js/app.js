//obtener el body :D
var hoja = document.getElementsByTagName("BODY")[0];
var foto;
var contador = 0;
//crear elementos
var section = document.createElement('section');
//dar propiedades a los elementos
//section
section.style.width = "1000px";
section.style.height = "700px";
section.style.left = "200px";
section.style.top = "100px";
section.style.position = "relative";
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
	foto1.style.width = "200px";
	foto1.style.height = "200px";
	foto1.style.position = "relative";
	return foto1;
}
//funcion de los div 
var cuadros = function(color,ancho,altura,posicion,alineamiento,valorTop,valorBottom,marginLeft){
	var cuadro = document.createElement('div');
	cuadro.style.border = color;
	cuadro.style.width = ancho;
	cuadro.style.height = altura;
	cuadro.style.position = posicion;
	cuadro.style.display = alineamiento;
	cuadro.style.top = valorTop;
	cuadro.style.bootom = valorBottom;
	cuadro.style.marginLeft = marginLeft;
	cuadro.appendChild(fotos());	 
	section.appendChild(cuadro);
}																//top     bottom margin
cuadros('10px solid red','200px','200px','relative','inline-block','100px','50px','80px');	
cuadros('10px solid green','200px','200px','relative','inline-block','100px','50px','80px');	
cuadros('10px solid purple','200px','200px','relative','inline-block','100px','50px','80px');	
cuadros('10px solid yellow','200px','200px','relative','inline-block','200px','50px','80px');	
cuadros('10px solid grey','200px','200px','relative','inline-block','200px','50px','80px');	
cuadros('10px solid black','200px','200px','relative','inline-block','200px','50px','80px');	
//dibujar
hoja.appendChild(section);

