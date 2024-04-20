function rot13(str){
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let newStr = str.split("");
    let final = "";
    let index;
    let rest;

    for (let bar=0; bar<newStr.length; bar++){
        index = alphabet.indexOf(newStr[bar]);
        if (index >= 13){
            index -= 13;
            final += alphabet[index];
        }else if (index != -1){
            rest = index - 13;
            index = 26 + rest;
            final += alphabet[index];
        } else{
            final += newStr[bar];
        }
    }

    return final;
}

rot13("SERR PBQR PNZC");
