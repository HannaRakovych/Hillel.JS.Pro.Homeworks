// 1. Запитати у користувача "Яке Ваше імʼя?" та зберегти у змінну

let userName = prompt("Яке Ваше імʼя?");
console.log(userName);

// 2. Запитати у користувача "Яке Ваше прізвище?" та зберегти у змінну

let userSurname = prompt("Яке Ваше прізвище");
console.log(userSurname);

// 3. Запитати у користувача "Яке Ваше улюблене число?" та зберегти у змінну

let userFavNum = +prompt("Яке Ваше улюблене число?");
console.log(userFavNum);

// 4. Дані, які ввів користувач, вивести у форматі - "Вітаю, {тут_ім'я} {тут_прізвище}! Ваше улюблене число - {тут_число}"

console.log(`Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${userFavNum}`);

// 5. Запитати у користувача "Введіть перше число" та зберегти у змінну
let firstNum = +prompt("Введіть перше число");
console.log(firstNum);

// 6. Запитати у користувача "Введіть друге число" та зберегти у змінну
let secondNum = +prompt("Введіть друге число");
console.log(secondNum);

// 7. Обчислити та вивести результати таких операцій над числами - сума, різниця, добуток, ділення
let sum = firstNum + secondNum;
console.log(sum);

let subtraction = firstNum - secondNum;
console.log(subtraction);

let multiplication = firstNum * secondNum;
console.log(multiplication);

let division = firstNum / secondNum;
console.log(division);

// 8. Запитати у користувача "В якому році Ви народились?" та зберегти у змінну цей результат
let userYearOfBirth = +prompt("В якому році Ви народились?");
console.log(userYearOfBirth);

// 9. Визначити та зберегти вік цього користувача у змінну
let currentYear = 2022;
let userAge = currentYear - userYearOfBirth;
console.log(userAge);

// 10. Знайти та обчислити остачу від ділення будь-яких двох чисел у форматі: "Остача від ділення числа {тут_ число_1} на число {тут_число_2} рівна {тут_результат_операції}"
let resultOfRemainder = firstNum % secondNum;
console.log(`Остача від ділення числа ${firstNum} на число ${secondNum} рівна ${resultOfRemainder}`)

// 11.  Користувач вводить число. Визначити чи число парне чи не парне
let randomNum = +prompt("Введіть будь-яке число");
console.log(randomNum);
const RESULT = randomNum % 2 === 0 ? "парне" : "непарне";
console.log(`Число ${RESULT}.`);