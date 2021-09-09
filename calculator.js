


function calculator(string) {


    /* делим строку на массив по пробелам */
    let arr = string.split(' ');
  
    /* Проверка на арабские и римские цифры */
  
    if ((isFinite(arr[0]) == true) && (isFinite(arr[2]) == true)) {
  
  
    } else if ((isNaN(arr[0]) == true) && (isNaN(arr[2]) == true)) {
  
    } else {
      throw Error;
    }
    /* если строка не подъодит под формат x math x */
    if (arr.length != 3) {
      throw Error
    }
  
    
  
    let a = Number(arr[0]);
    let b = Number(arr[2]);
    let c = arr[1];
    
  /* создаем отдельныф массив для римских цифр */
    let RomanArr = arr.slice(0);
    let rimA = RomanArr[0];
    let rimB = RomanArr[2];
  
    /* калькулятор работает только с числами от 1 до 10  */
    if (a > 10 || b > 10 || a < 1 || b < 1) {
      throw Error;
    }
    /* Функция для мат операций */
    function count(a, b, c) {
      switch (c) {
        case "+": return result = a + b;
          break;
  
        case "-": return result = a - b;
          break;
  
        case "*": return result = a * b;
          break;
  
        case "/": return result = Math.floor(a / b);
          break;
  
        case "%": throw Error;
      }
  
    }
  
    let result = 0;
    /* вызываем функция для вычисления арабских чисел */
    count(a, b, c);
  
  /* Функции для превращения римских цифр в арабские */
    function RomainToArab(rimA) {
      switch (rimA) {
        case 'I': return 1;
        case 'II': return 2;
        case 'III': return 3;
        case 'IV': return 4;
        case 'V': return 5;
        case 'VI': return 6;
        case 'VII': return 7;
        case 'VIII': return 8;
        case 'IX': return 9;
        case 'X': return 10;
        case 'XI': throw Error;
       }
    }
  
   let ResultRoman = 0;
  /* присвоение переменным резултаты превращения римскив в арабские */
    let RomanA = RomainToArab(rimA);
    let RomanB = RomainToArab(rimB);
  
    /* вызов функции для действия над римскими цифрами */
    let rimResult = romanSum(RomanA, RomanB, c);
  
  /* калькулятор для привращенных римских цифр */
    function romanSum(RomanA, RomanB, c) {
      switch (c) {
        case "+":
          resultRoman = RomanA + RomanB;
          return resultRoman;
          break;
  
        case "-":
          return resultRoman = RomanA - RomanB;
          break;
  
        case "*":
          resultRoman = RomanA * RomanB;
          return resultRoman;
          break;
  
        case "/":
          resultRoman = Math.floor(RomanA / RomanB);
          return resultRoman;
          break;
       }
    }
  
    /* Функция для обратного превращения из арабских в римские  */
  
    function ArabicToRome(resultRoman) {
      if (resultRoman <= 0) {
        return result = "";
      } else {
        switch (resultRoman) {
          case 1: return result = 'I';
          case 2: return result = 'II';
          case 3: return result = 'III';
          case 4: return result = 'IV';
          case 5: return result = 'V';
          case 6: return result = 'VI';
          case 7: return result = 'VII';
          case 8: return result = 'VIII';
          case 9: return result = 'IX';
          case 10: return result = 'X';
          case 19: return result = 'XIX';
          case 20: return result = 'XX';
          case 40: return result = 'XL';
          case 25: return result = 'XXV';
          case 50: return result = 'L';
          case 100: return result = 'C';
          case 500: return result = 'D';
          case 1000: return result = 'M';
        }
      }
    }
    /* вызов функции для превращения из арабских в римские после выполнения мат. */
    ArabicToRome(resultRoman);
    result = String(result);
       return result;
  // код пишите внутри этой функции
  }
  
  
  module.exports = calculator;