function convertToRoman(num){ 
    const recipe = {
        zero: {
            one: "I",
            four: "IV",
            five: "V",
            nine: "IX"
        },
        ten: {
            one: "X",
            four: "XL",
            five: "L",
            nine: "XC"
        },
        hundred: {
            one: "C",
            four: "CD",
            five: "D",
            nine: "CM"
        },
        thousand: {
            one: "M",
            four: "MV̅",
            five: "V̅",
            nine: "Mx̄"
        }
    };

    const multiplyStr = function(times, char){
        let final = "";
        for (let i = 0; i < times; i++){
            final += char;
        }
        return final;
    };

    const loop = function(unit, digit){
        let romanStr = "";

        if(digit == 9){
            romanStr += recipe[unit].nine;
        }else if (digit >= 6){
            romanStr += recipe[unit].five + multiplyStr((digit-5), recipe[unit].one);
        }else if (digit == 5){
            romanStr += recipe[unit].five;
        }else if (digit == 4){
            romanStr += recipe[unit].four;
        }else if(digit < 4){
            romanStr += multiplyStr(digit, recipe[unit].one);
        }
    
        return romanStr;
    };

    if (num.length >= 4){
        let sum = loop("thousand", num[0]) + loop("hundred", num[1]) + loop("ten", num[2]) + loop("zero", num[3]);
        
        return sum;
    } else if (num.length >= 3){
        let sum = loop("hundred", num[0]) + loop("ten", num[1]) + loop("zero", num[2]);
        
        return sum;
    } else if (num.length >=2){
        let sum = loop("ten", num[0]) + loop("zero", num[1]);
        
        return sum;
    } else if (num.length >= 1){
        let sum = loop("zero", num[0]);
        
        return sum;
    } 

}

// NEXT YOU WILL FIND THE CHANGES I HAD TO MAKE TO COMPLETE THE FREECODECAMP.ORG CHALLANGE: 
// BASICALLY NUM.LENGTH AND NUM[xyz] AREN'T ACCEPTED

/*
function convertToRoman(num){ 
  let sum = "";
  let number = num.toString().split("");

  const recipe = {
      zero: {
          one: "I",
          four: "IV",
          five: "V",
          nine: "IX"
      },
      ten: {
          one: "X",
          four: "XL",
          five: "L",
          nine: "XC"
      },
      hundred: {
          one: "C",
          four: "CD",
          five: "D",
          nine: "CM"
      },
      thousand: {
          one: "M",
          four: "MV̅",
          five: "V̅",
          nine: "Mx̄"
      }
  };

  const multiplyStr = function(times, char){
      let final = "";
      for (let i = 0; i < times; i++){
          final += char;
      }
      return final;
  };

  const loop = function(unit, digit){
      let romanStr = "";

      if(digit == 9){
          romanStr += recipe[unit].nine;
      }else if (digit >= 6){
          romanStr += recipe[unit].five + multiplyStr((digit-5), recipe[unit].one);
      }else if (digit == 5){
          romanStr += recipe[unit].five;
      }else if (digit == 4){
          romanStr += recipe[unit].four;
      }else if(digit < 4){
          romanStr += multiplyStr(digit, recipe[unit].one);
      }

      return romanStr;
  };

  if (number.length >= 4){
      sum = loop("thousand", number[0]) + loop("hundred", number[1]) + loop("ten", number[2]) + loop("zero", number[3]);
      
  } else if (number.length >= 3){
      sum = loop("hundred", number[0]) + loop("ten", number[1]) + loop("zero", number[2]);
 
  } else if (number.length >=2){
      sum = loop("ten", number[0]) + loop("zero", number[1]);
      
  } else if (number.length >= 1){
      sum = loop("zero", number[0]); 
  }
  return sum;
}

convertToRoman(36);
*/
