function telephoneCheck(str) {
    let newStr = str.split("");
    let spacedStr = str.split(" ");
    let number;
    let final = "";

    for (let foo=0; foo<newStr.length; foo++){
        number = parseInt(newStr[foo]);
        if (number){
            final += number.toString();
        }else if (newStr[foo] == "(" && newStr[foo + 4] != ")"){
            return false;
        } else if (newStr[foo] == ")" && newStr[foo -4] != "("){
            return false;
        }else if (newStr[foo] == "?"){
            return false;
        }
    }

    if (spacedStr.length > 1 && spacedStr[0] != "1"){
        return false;
    } else if (final.length >= 10 && final.length <= 11){
        if (final.length == 11 && final[0] == "1" && str[0] != "-"){
            return true;
        } else if (final.length == 10 && str[0] != "0"){
            return true;
        } else {
            return false;
        }
    }else{
        return false;
    }

}
