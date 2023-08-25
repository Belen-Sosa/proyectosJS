var valorRomano=[];

function convertToRoman(num) {
  let resto=convertNumRomano(num);
  while(resto!=0){
    resto=convertNumRomano(resto);
  }

  return valorRomano.join("");
 
}

 

function convertNumRomano(num){
  let numFinal=num;
  let numVeces=0;
  let letra="";
  switch(num){ 
    case 1:
    letra= "I";
    numVeces=1;
      numFinal=numFinal%1;
      num=0;
    break;
     case 2:
   letra= "II";
    numVeces=1;
      numFinal=numFinal%2;
      num=0;
    break;
     case 3:
    letra= "III";
     numVeces=1;
       numFinal=numFinal%3;
       num=0;
    break;
     case 4:
    letra= "IV";
     numVeces=1;
       numFinal=numFinal%4;
    num=0;
    break;
     case 5:
    letra= "V";
     numVeces=1;
       numFinal=numFinal%5;
    num=0;
    break;
  
     case 9:
    letra ="IX";
     numVeces=1;
       numFinal=numFinal%9;
    num=0;
    break;
     case 10:
    letra= "X";
     numVeces=1;
       numFinal=numFinal%10;
    num=0;
    break;
    
    
 
  
  }
  
if(num>=1000 && num<=3999){
 
  numVeces=numFinal/1000;
  numFinal=numFinal%1000;
  letra='M';
  num=0;
 
}else if(num>=900  && num<1000){
 
  letra= "CM";
  numVeces=1;
  numFinal=numFinal%900;
  num=0;
  
}
else if(num>=500  && num<900){
 
  numVeces=numFinal/500;
  numFinal=numFinal%500;
  letra='D';
  num=0;

}else if(num>=400 && num<500){

  letra= "CD";
  numVeces=1;
  numFinal=numFinal%400;
  num=0;
 
}
else if( num>=100  && num<=400){
 
  numVeces=numFinal/100;
  numFinal=numFinal%100;
  letra='C';
  num=0;

}else if(num>= 90 && num <100){
  letra= "XC";
  numVeces=1;
  numFinal=numFinal%90;
  num=0;
}
else if(num>=50  && num<100){
  numVeces=numFinal/50;
  numFinal=numFinal%50;
  letra='L';
  num=0;
   
   
 
}else if(num>=40 && num<=49){
 
    
  numVeces=numFinal/40;
  numFinal=numFinal%10;
  letra='XL';
  num=0;
   
}
else if(num>10 && num<=38){
 

  numVeces=numFinal/10;
  numFinal=numFinal%10;
  letra='X';
  num=0;
   
}
else if(num>5  && num<=15){
   
  numVeces=numFinal/5;
  numFinal=numFinal%5;
  letra='V';
  num=0;
}
 
for (let i=0;i<parseInt(numVeces);i++){
  valorRomano.push(letra);
}

 return numFinal;
}
