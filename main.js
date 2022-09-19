// 1. Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них
const GET_MIN_NUM = function (num1, num2, num3, num4) {
    const MIN = Math.min(num1, num2, num3, num4);
}
GET_MIN_NUM()

//2. Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. Якщо такого числа немає, то повідомляти про відсутність
const GET_GREATEST_COMMON_DENOMINATOR = function (num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
      return false;
      num1 = Math.abs(num1);
      num2 = Math.abs(num2);
    while(num2) {
      const NUM3 = num2;
      num2 = num1 % num2;
      num1 = NUM3;
    }
    return num1;
  }
GET_GREATEST_COMMON_DENOMINATOR()

// 3. Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
const PERFECT_NUMBER = function (num) {
    let step = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            step += i;
        }
    }
    if (step === num && step !== 0) {
        //console.log(`The number ${num} is perfect!`)
    } else {
        //console.log(`The number ${num} is NOT perfect!`)
    }
}
PERFECT_NUMBER()

// 4. Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. Зверніть увагу, що можна передати 10 та -2, як аргументи. Суму всіх чисел в цьому проміжку також треба обчислити
const RANGE_SUM = function(num1, num2) {
    let sum = 0;
    if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        } 
    } else {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }
}
RANGE_SUM()

// 5. Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
const TEMP_F = function (randomTemp) {
    const CONVERTATION_FROM_C_TO_F = randomTemp * 1.8 + 32;
}
TEMP_F()

// 6. Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40
let max = 40;
const RANDOM_NUM = function () {
    const RANDOM_INTEGER = Math.floor(Math.random() * max);
}
RANDOM_NUM()