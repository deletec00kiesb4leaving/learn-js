function palindrome(str) {
    let check = "";
    let myRegex = /^([\W_])|([w+\W_])|(\s)|([\W_])$/gi;
    let myStr = str.replace(myRegex, "");
  
  
    for (let i=0; i < myStr.length; i++){
      if (myStr[i].toLowerCase() == myStr[myStr.length -1 - i].toLowerCase()){
        check += myStr[i];
        if (check.toLowerCase() == myStr.toLowerCase()){
          return true;
        }
      }
    }
    if (check != myStr){
      return false
    }
  }
  

  
palindrome("eye");