// 1. Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)
for (let i = 10; i <= 25; i = i + 0.5) {
    console.log(i);
}

// 2. Запитати та зберегти число введене із prompt.
const USER_NUM = +prompt("Enter a positive number: ");
console.log(USER_NUM);

// 3. Визначати чи це число просте
let isPrime = true;
if (USER_NUM === 1) {
  console.log("1 is neither prime nor composite number."); 
} else if (USER_NUM > 1) {
  for (let i = 2; i < USER_NUM; i++) {
    if (USER_NUM % i === 0) {
      isPrime = false; 
      console.log(`${USER_NUM} is not a prime number.`);
      break; 
    } if (isPrime) {
      console.log(`${USER_NUM} is a prime number.`);
      break;
    }
  }
}
   

// 4. Запитати та зберегти суму покупки введене із prompt. Обрахувати знижку та повідомити користувачу значення знижки. Якщо сума покупки до 100 UAН - знижка 3%; якщо сума покупки до 200 UAH - знижка 5%; якщо сума покупки перевищує 200 UAH - знижка 7%
const PURCHASE_AMOUNT = +prompt("How much money did you spent?");
console.log(PURCHASE_AMOUNT);

let discount = null;
if (PURCHASE_AMOUNT < 100 && PURCHASE_AMOUNT > 0) {
    discount = (PURCHASE_AMOUNT * 0.03).toFixed(2);
} else if (PURCHASE_AMOUNT >= 100 && PURCHASE_AMOUNT < 200) {
    discount = (PURCHASE_AMOUNT * 0.05).toFixed(2);
} else if (PURCHASE_AMOUNT >= 200) {
    discount = (PURCHASE_AMOUNT * 0.07).toFixed(2);
}
console.log(`Your discount is ${discount}%`);


// 5. Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі
let i = 2;
let j = 2;
while (i < 10) {
j = 2 
  while (j < 10) {
  console.log(`${i} * ${j} = ${i * j}`)
  j++
} i++
}


// 6. Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Формат (100 USD = 3 676 UAH)
const ONE_USD_VALUE = 36.76;
for (let i = 10; i <= 100; i = i + 10) {
    const CURRENCY_EXCHANGE = (ONE_USD_VALUE * i).toFixed(2);
    console.log(`${i} USD = ${CURRENCY_EXCHANGE} UAH`)
}

// 7. Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів. Також визначатити кількість парних і непарних. Вивести статистику через console у зрозумілому форматі. *** Достатньо однієї змінної (не 15) для введення чисел користувачем.
let positiveNumSum = 0;
let negativeNumSum  = 0;
let zeroNumSum  = 0;
let pairdNumSum  = 0;
let unpairdNumSum = 0;
let arr = [];

for (let i = 0; i < 15; i++) {
arr[i] = +prompt("Please, enter 15 different numbers");
} 
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveNumSum++;
    } else if (arr[i] < 0) {
        negativeNumSum++;
    } else if (arr[i] === 0) {
        zeroNumSum++;
    }
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
        pairdNumSum++;
    } else if (arr[i] % 2 !== 0) {
        unpairdNumSum++;
    }
}

console.log(`Серед введенних Вами чисел ми отримали: додатніх - ${positiveNumSum}, від’ємних - ${negativeNumSum}, нулів - ${zeroNumSum}, парних - ${pairdNumSum} та непарних - ${unpairdNumSum} чисел.`)



