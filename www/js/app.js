// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

var productos = "";
var contador = 20;
var doc = new jsPDF();

function agregar(id){
  var precio;
  var nombre;
  var cantidad;
  var product;
  precio=document.getElementById(id).value;
  nombre=document.getElementById("l" + id).textContent;
  cantidad = document.getElementById("c"+id).value;

  if (cantidad != ""){
    alert("Producto " + nombre + " agregado");
    precio = parseFloat(cantidad) * parseFloat(precio);
    product = " "+ cantidad + "\t\t" + nombre +  "\t\t" + precio + "\n";
    productos += product;
  }else{
    alert("Indique la cantidad");
  }
}

function carrito(){
  doc.text(10, 10, "Cantidad");
  doc.text(80, 10, "Descripción");
  doc.text(160, 10, "Precio");
  doc.text(10, 20, productos+"\n");
  doc.save ('prueba.pdf');
}