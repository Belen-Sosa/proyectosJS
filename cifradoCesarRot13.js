function rot13(str) {
  let nuevaPalabra="";
  let abecedario=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
  for (let i=0; i<str.length;i++){

    let caracter= str[i];

    if (abecedario.includes(caracter)){
          let indice= abecedario.indexOf(caracter)+13;
          if(indice>=abecedario.length){
          indice= indice-abecedario.length;

          }
          caracter=abecedario[indice];
    }
    nuevaPalabra=nuevaPalabra.concat(caracter);
  }
  return nuevaPalabra;

}

rot13("SERR CVMMN!");