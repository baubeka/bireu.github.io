function romanize() {
  var cyrillic = document.getElementById("cyrillic").value;
  var arr = cyrillic.split("");
  var newArr = [];
  
  for(i = 0; i < arr.length; i++)
  {
    if(arr[i] == " ")
    {
      newArr.push(" ");
    }
    else if(arr[i] == "0" || arr[i] == "1" || arr[i] == "2" || arr[i] == "3" || arr[i] == "4" || arr[i] == "5" 
    || arr[i] == "6" || arr[i] == "7" || arr[i] == "8" || arr[i] == "9" || arr[i] == "-")
    {
      newArr.push(arr[i]);
    }
    else
    {
      switch(arr[i])
      {
        case "а":
          newArr.push("a");
          break;
        case "б":
          newArr.push("b");
          break;
        case "в":
          newArr.push("v");
          break;
        case "г":
          newArr.push("g");
          break;
        case "д":
          newArr.push("d");
          break;
        case "е":
          if(i == 0 || arr[i-1] == "а" || arr[i-1] == "э" || arr[i-1] == "ы" || arr[i-1] == "у" || arr[i-1] == "о" || 
          arr[i-1] == "я" || arr[i-1] == "е" || arr[i-1] == "ё" || arr[i-1] == "ю" || 
          arr[i-1] == "и" || arr[i-1] == "ъ" || arr[i-1] == "ь" || arr[i-1] == " " || 
          arr[i-1] == "А" || arr[i-1] == "Э" || arr[i-1] == "Ы" || arr[i-1] == "У" || arr[i-1] == "О" || arr[i-1] == "Я" || 
          arr[i-1] == "Е" || arr[i-1] == "Ё" || arr[i-1] == "Ю" || arr[i-1] == "И" || arr[i-1] == "Ъ" || 
          arr[i-1] == "Ь" || arr[i-1] == "-")
          {
          newArr.push("ye");
          }
          else
          {
          newArr.push("e");
          }
          break;
        case "ё":
          if(i == 0 || arr[i-1] == "а" || arr[i-1] == "э" || arr[i-1] == "ы" || arr[i-1] == "у" || arr[i-1] == "о" || 
          arr[i-1] == "я" || arr[i-1] == "е" || arr[i-1] == "ё" || arr[i-1] == "ю" || 
          arr[i-1] == "и" || arr[i-1] == "ъ" || arr[i-1] == "ь" || arr[i-1] == " " || 
          arr[i-1] == "А" || arr[i-1] == "Э" || arr[i-1] == "Ы" || arr[i-1] == "У" || arr[i-1] == "О" || arr[i-1] == "Я" || 
          arr[i-1] == "Е" || arr[i-1] == "Ё" || arr[i-1] == "Ю" || arr[i-1] == "И" || arr[i-1] == "Ъ" || 
          arr[i-1] == "Ь" || arr[i-1] == "-")
          {
          newArr.push("yo");
          }
          else if(arr[i-1] == "ч" || arr[i-1] == "ш" || arr[i-1] == "щ" || arr[i-1] == "ж" ||
          arr[i-1] == "Ч" || arr[i-1] == "Ш" || arr[i-1] == "Щ" || arr[i-1] == "Ж")
          {
          newArr.push("e");
          }
          else 
          {
          newArr.push("ye");
          }
          break;
        case "ж":
          newArr.push("zh");
          break;
        case "з":
          newArr.push("z");
          break;
        case "и":
          newArr.push("i");
          break;
        case "й":
          newArr.push("y");
          break;
        case "к":
          newArr.push("k");
          break;
        case "л":
          newArr.push("l");
          break;
        case "м":
          newArr.push("m");
          break;
        case "н":
          newArr.push("n");
          break;
        case "о":
          newArr.push("o");
          break;
        case "п":
          newArr.push("p");
          break;
        case "р":
          newArr.push("r");
          break;
        case "с":
          newArr.push("s");
          break;
        case "т":
          newArr.push("t");
          break;
        case "у":
          newArr.push("u");
          break;
        case "ф":
          newArr.push("f");
          break;
        case "х":
          newArr.push("kh");
          break;
        case "ц":
          newArr.push("ts");
          break;
        case "ч":
          newArr.push("ch");
          break;
        case "ш":
          newArr.push("sh");
          break;
        case "щ":
          newArr.push("shch");
          break;
        case "ы":
          newArr.push("y");
          break;
        case "э":
          newArr.push("e");
          break;
        case "ю":
          newArr.push("yu");
          break;
        case "я":
          newArr.push("ya");
          break;
        case "ъ":
          newArr.push("ʼ");
          break;
        case "ь":
          newArr.push("ʼ");
          break;
      //Capital Letters    
        case "А":
          newArr.push("A");
          break;
        case "Б":
          newArr.push("B");
          break;
        case "В":
          newArr.push("V");
          break;
        case "Г":
          newArr.push("G");
          break;
        case "Д":
          newArr.push("D");
          break;
        case "Е":
          if(i == 0 || arr[i-1] == "а" || arr[i-1] == "э" || arr[i-1] == "ы" || arr[i-1] == "у" || arr[i-1] == "о" || 
          arr[i-1] == "я" || arr[i-1] == "е" || arr[i-1] == "ё" || arr[i-1] == "ю" || 
          arr[i-1] == "и" || arr[i-1] == "ъ" || arr[i-1] == "ь" || arr[i-1] == " " || 
          arr[i-1] == "А" || arr[i-1] == "Э" || arr[i-1] == "Ы" || arr[i-1] == "У" || arr[i-1] == "О" || arr[i-1] == "Я" || 
          arr[i-1] == "Е" || arr[i-1] == "Ё" || arr[i-1] == "Ю" || arr[i-1] == "И" || arr[i-1] == "Ъ" || 
          arr[i-1] == "Ь" || arr[i-1] == "-")
          {
          newArr.push("Ye");
          }
          else
          {
          newArr.push("E");
          }
          break;
        case "Ё":
          if(i == 0 || arr[i-1] == "а" || arr[i-1] == "э" || arr[i-1] == "ы" || arr[i-1] == "у" || arr[i-1] == "о" || 
          arr[i-1] == "я" || arr[i-1] == "е" || arr[i-1] == "ё" || arr[i-1] == "ю" || 
          arr[i-1] == "и" || arr[i-1] == "ъ" || arr[i-1] == "ь" || arr[i-1] == " " || 
          arr[i-1] == "А" || arr[i-1] == "Э" || arr[i-1] == "Ы" || arr[i-1] == "У" || arr[i-1] == "О" || arr[i-1] == "Я" || 
          arr[i-1] == "Е" || arr[i-1] == "Ё" || arr[i-1] == "Ю" || arr[i-1] == "И" || arr[i-1] == "Ъ" || 
          arr[i-1] == "Ь" || arr[i-1] == "-")
          {
          newArr.push("Yo");
          }
          else if(arr[i-1] == "ч" || arr[i-1] == "ш" || arr[i-1] == "щ" || arr[i-1] == "ж" ||
          arr[i-1] == "Ч" || arr[i-1] == "Ш" || arr[i-1] == "Щ" || arr[i-1] == "Ж")
          {
          newArr.push("E");
          }
          else 
          {
          newArr.push("Ye");
          }
          break;
        case "Ж":
          newArr.push("Zh");
          break;
        case "З":
          newArr.push("Z");
          break;
        case "И":
          newArr.push("I");
          break;
        case "Й":
          newArr.push("Y");
          break;
        case "К":
          newArr.push("K");
          break;
        case "Л":
          newArr.push("L");
          break;
        case "М":
          newArr.push("M");
          break;
        case "Н":
          newArr.push("N");
          break;
        case "О":
          newArr.push("O");
          break;
        case "П":
          newArr.push("P");
          break;
        case "Р":
          newArr.push("R");
          break;
        case "С":
          newArr.push("S");
          break;
        case "Т":
          newArr.push("T");
          break;
        case "У":
          newArr.push("U");
          break;
        case "Ф":
          newArr.push("F");
          break;
        case "Х":
          newArr.push("Kh");
          break;
        case "Ц":
          newArr.push("Ts");
          break;
        case "Ч":
          newArr.push("Ch");
          break;
        case "Ш":
          newArr.push("Sh");
          break;
        case "Щ":
          newArr.push("Shch");
          break;
        case "Ы":
          newArr.push("Y");
          break;
        case "Э":
          newArr.push("E");
          break;
        case "Ю":
          newArr.push("Yu");
          break;
        case "Я":
          newArr.push("Ya");
          break;
        case "Ъ":
          newArr.push("ʼ");
          break;
        case "Ь":
          newArr.push("ʼ");
          break; 
        
        
      }//switch
    }//else
  }//for
  
  var concat = newArr.join("");
 
  document.getElementById("output").innerHTML = concat;
  
}
