// 1. Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них
const GET_MIN_NUM = function (num1, num2, num3, num4) {
    if (arguments.length < 4) {
        return "Not enough digits!";
    } else if (arguments.length > 4) {
        return "You have to put only 4 digits, not more!";
    }
    else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        return "You have to put only digits!";
    } else {
        const MIN = Math.min(num1, num2, num3, num4);
        return `${MIN} is the smallest digit!` ;
    }
}
// console.log(GET_MIN_NUM(6, 0, 3, 5)) // 0 is the smallest digit!
// console.log(GET_MIN_NUM(7, 3, 5)) // Not enough digits!
// console.log(GET_MIN_NUM(9, 0, 7, 3, 5)) // You have to put only 4 digits, not more!
// console.log(GET_MIN_NUM("k", 7, 3, 5)) // You have to put only digits!
console.log(GET_MIN_NUM()) // Not enough digits!


// 2. Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. Якщо такого числа немає, то повідомляти про відсутність
const GET_GREATEST_COMMON_DENOMINATOR = function (num1, num2) {
    if (num1 === undefined || num2 === undefined || num1 == null || num2 == null) {
        return "Not enough digits!"
    } else if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return "You have to put only digits!";
    } else if (arguments.length > 2) {
        return "You have to put only 2 digits, not more!";
    }
      num1 = Math.abs(num1);
      num2 = Math.abs(num2);
      while(num2) {
        const NUM3 = num2;
        num2 = num1 % num2;
        num1 = NUM3;
      }
      return `${num1} is the greatest common denominator!`;
    }
  console.log(GET_GREATEST_COMMON_DENOMINATOR(8, 16)) // 8 is the greatest common denominator!
//   console.log(GET_GREATEST_COMMON_DENOMINATOR(8, 16, 28)) // You have to put only 2 digits, not more!
//   console.log(GET_GREATEST_COMMON_DENOMINATOR(16)) // Not enough digits!
//   console.log(GET_GREATEST_COMMON_DENOMINATOR(8, "k")) // You have to put only digits!
  
  // 3. Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
  const PERFECT_NUMBER = function (num) {
    let step = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            step += i;
        }
    }
    if (num === undefined || num == null) {
        return "Not enough digits!"
    } else if (arguments.length > 1) {
        return "You have to put only 1 digit, not more!";
    } else if ((typeof num !== 'number')) {
        return "You have to put only digits!";
    } else if (step === num && step !== 0) {
        return `The number ${num} is perfect!`;
    } else {
        return `The number ${num} is NOT perfect!`;
    }
  }
  console.log(PERFECT_NUMBER(6)) // The number 6 is perfect!
  //console.log(PERFECT_NUMBER(5)) // The number 5 is NOT perfect!
  //console.log(PERFECT_NUMBER(5, 7)) // You have to put only 1 digit, not more!
  //console.log(PERFECT_NUMBER()) // Not enough digits!
  //console.log(PERFECT_NUMBER("g")) // You have to put only digits!

  // 4. Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. Зверніть увагу, що можна передати 10 та -2, як аргументи. Суму всіх чисел в цьому проміжку також треба обчислити
    const RANGE_SUM = function(num1, num2) {
    let sum = 0;
    if (num1 === undefined || num2 === undefined || num1 == null || num2 == null) {
        return "Not enough digits!"
    } else if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return "You have to put only digits!";
    } else if (arguments.length > 2) {
        return "You have to put only 2 digits, not more!";
    } else if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        } 
        return `Суму всіх чисел в проміжку ${num1} - ${num2} = ${sum}`;
    } else {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        } return `Сумма всіх чисел в проміжку від ${num1} до ${num2} = ${sum}`;
    }
}
console.log(RANGE_SUM(2, 6)) // Сумма всіх чисел в проміжку від 2 до 6 = 20
// console.log(RANGE_SUM(-2, 6)) // Сумма всіх чисел в проміжку від -2 до 6 = 18
// console.log(RANGE_SUM(2, -6)) // Суму всіх чисел в проміжку 2 - -6 = -18
// console.log(RANGE_SUM(2, 6, 9)) // You have to put only 2 digits, not more!
// console.log(RANGE_SUM()) // Not enough digits!
// console.log(RANGE_SUM(2, "j")) // You have to put only digits!

// 5. Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
const TEMP_F = function (randomTemp) {
    if (randomTemp === undefined || randomTemp == null) {
        return "Please put a temperature to convert!"
    } else if ((typeof randomTemp !== 'number')) {
        return "Something went wrong :( We can't do the operation...";
    }
    const CONVERTATION_FROM_C_TO_F = randomTemp * 1.8 + 32;
    return `${randomTemp}C = ${CONVERTATION_FROM_C_TO_F}F`
}
console.log(TEMP_F(100)) // 100C = 212 F
// console.log(TEMP_F(-100)) // -100C = -148 F 
// console.log(TEMP_F()) // Please put a temperature to convert!
// console.log(TEMP_F("f")) // Something went wrong :( We can't do the operation...

// 6. Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

const RANDOM_NUM = function (max) {
    if (max === undefined || max == null) {
        return "Something went wrong :( We can't do the operation...";
    } else if (max !== 40 && typeof max === 'number') {
        return `You must enter the number 40. Not more and not less`;
    } else if (typeof max !== 'number') {
        return `${max} - is not a digit!`
    } else {
        const RANDOM_INTEGER = Math.floor(Math.random() * max);
    return `Your random integer between 0 and 40 is - ${RANDOM_INTEGER}`
    }
}
console.log(RANDOM_NUM(40)) // Your random integer between 0 and 40 is - 4
// console.log(RANDOM_NUM(0)) // You must enter the number 40. Not more and not less
// console.log(RANDOM_NUM("j")) // j - is not a digit!
// console.log(RANDOM_NUM()) // Something went wrong :( We can't do the operation...


