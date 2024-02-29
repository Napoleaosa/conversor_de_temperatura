var faren = 0 ;
var celsius= 0 ;

//function Somar(){
 //   contador = contador +1;
  // document.getElementById("saida").value = contador;
//}

//function Subtrair(){
//     contador = contador -1;
 //    document.getElementById("saida").value = contador;
//}


function Converter(){
     alert('conectar');
     faren = document.getElementById("fah").value;
     celsius = (faren * (9/5)  + 32 );
     document.getElementById("valor").innerText = celsius;
}