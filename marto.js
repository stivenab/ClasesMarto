var Elementosarray = [];
var totalFactura = 0;

function Cliente(nombrecli,direccioncli,telefonocli,nitcli) {
  this.nombre = nombrecli;
  this.direccion = direccioncli;
  this.telefono = telefonocli;
  this.nit = nitcli;

}
function Empresa(nombre,direccion,telefono,nit){
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nit = nit;
}
function Elementos(descripcion,precio,cantidad){
  var elemento = {desciption:descripcion,price:precio,quantity:cantidad}
  return elemento;
}

function AgregarCarrito (elemento){
 Elementosarray.push(elemento);


 }

 function Factura(tipo_iva, forma_pago, Cliente, Empresa, Elementosarray){

 this.tipo_iva = tipo_iva;
 this.forma_pago = forma_pago;
 this.Cliente = Cliente;
 this.Empresa = Empresa;
 this.Elementosarray = Elementosarray;
 console.info("informacion del cliente")
 console.info("nombre: " + Cliente.nombre + "direccion: " + Cliente.direccion + "telefono:  " + Cliente.telefono + "NIT:" +  Cliente.nit)

 console.info("informacion de la empresa")
 console.info("nombre: " + Empresa.nombre + "direccion: " + Empresa.direccion + "telefono: " + Empresa.telefono + "NIT: " + Empresa.nit)
 console.info("forma de pago " + this.forma_pago)
 console.table(this.Elementosarray)
   for (var i = 0; i < Elementosarray.length; i++) {
     totalFactura = totalFactura + Elementosarray[i].price;
   }
 console.info("total factura  " + totalFactura)
 }



 var elemento1 =  new Elementos("leche", 15000, 10);
 var elemento2 =  new Elementos("arepas", 25000, 20);
 var elemento3 =  new Elementos("pasta", 35000, 30);
 var elemento4 =  new Elementos("jabon", 15000, 10);
