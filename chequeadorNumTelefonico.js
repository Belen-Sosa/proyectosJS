function telephoneCheck(str) {
 
    let numerosSolos="";
    if(str.indexOf("(")&& str.indexOf(")") || str.indexOf("-") || str.indexOf(" "))  {

      if(!str.includes("(") && str.includes(")")) {
 
        return false;
      }

      if(str.includes("(") && !str.includes(")")) {

        return false;
      }
      if(str.indexOf("(")==0 && str.indexOf(")")==str.length-1) {
      
        return false;
      }
      if(str.indexOf("-")==0 || str.indexOf(" ")==2) {
      
        return false;
      }
     numerosSolos= str.replace(/[()-\s]/g, '');
    }
    if(numerosSolos.length==11 &&numerosSolos[0]=='1' ){

      return true;
    }
    if(numerosSolos.length==10 ){
   
      return true;
    }


  return false;
}

