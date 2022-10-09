const VALIDATE = (prop) => {
    return prop === undefined || prop === null || prop === "";
}

const validateNumbers = (prop) => {
    isNaN(prop);
}

// 1. Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа.
const arraySize = +prompt("Please, enter an array length:");
let newArray = [];

const createArray = (size, arr) => {
    if(validateNumbers(size) || size === undefined || size === null || size < 1) {
        prompt("Please try one more time and enter the length of your future array!");
    } else {
        for (let i = 0; i < size; i++) {
            arr[i] = prompt("Please enter a number.");
                if(VALIDATE(arr[i]) || validateNumbers(arr[i])) {
                    return;
                }
            }
        } console.log(arr);
}
createArray(arraySize, newArray);

// 2. Відсортувати масив за зростанням.
newArray.sort((num_1, num_2) => {
    return num_1 - num_2;
});
console.log(newArray);


// 3. Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду: {productName: 'bread', productPrice: 14.5, productQuantity: 2}. Мінімальний довжина такого масиву - 6

const productArray = [
    {productName: "молоко", productPrice: 35, productQuantity: 2},
    {productName: "сир", productPrice: 100, productQuantity: 5},
    {productName: "хліб", productPrice: 35, productQuantity: 4},
    {productName: "м'ясо", productPrice: 150, productQuantity: 3},
    {productName: "виноград", productPrice: 85, productQuantity: 1},
    {productName: "авокадо", productPrice: 60, productQuantity: 4},
    {productName: "рисова локшина", productPrice: 200, productQuantity: 2},
];
// Created a function to sort the array by field.
const sortedByField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
};

// Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі
const totalPrice = productArray.reduce((totalPrice, {productPrice, productQuantity}) => totalPrice + productPrice * productQuantity, 0);
console.log(`Загальна вартість продуктової корзини складає ${totalPrice} грн.`);

// Порахувати найменшу кількість продукту, який потрібно купити
const sortedByQuantity = productArray.sort(sortedByField("productQuantity"));
console.log(sortedByQuantity)
// console.log("Найменша кількість продукту, який ми маємо придбати - " + sortedByQuantity[0].productName + " - " + sortedByQuantity[0].productQuantity + ".")

// Порахувати загальну кількість продуктів
const totalQuantity = productArray.reduce((totalQuantity, {productQuantity}) => totalQuantity + productQuantity, 0);
console.log(`Загальна кількість товарів = ${totalQuantity}.`)

// Знайти найдорожчий продукт
const mostExpensiveProduct = productArray.sort(sortedByField("productPrice"));
console.log("Найдорожчий продукт, який ми маємо придбати - " + mostExpensiveProduct[mostExpensiveProduct.length-1].productName + ", продукт коштує - " + mostExpensiveProduct[mostExpensiveProduct.length-1].productPrice + " грн.")

// Створити функцію, яка повинна додавати новий продукт в існуючий масив
const newProduct = {};

const addNewProduct = (array, obj) => {
    obj.productName = prompt("Введіть назву продукту, який би додатково хотіли б придбати.");
    obj.productPrice = +prompt("Вкажіть вартість цього продукту.");
    obj.productQuantity = +prompt("Вкажіть кількість цього продукту.");
    if (VALIDATE(obj.productName) || VALIDATE(obj.productPrice) || validateNumbers(obj.productPrice) || VALIDATE(obj.productQuantity) || validateNumbers(obj.productQuantity)){
        return false;
    } else {
        return array.push(obj);
    }
};
addNewProduct(productArray, newProduct);
console.log(productArray);


// Створити функцію, яка повинна видаляти конкретний продукт із існуючий масиву продуктів
// Дані про видалення такого продукту - користувач вводить із prompt лише назву
const deleteProduct = (array) => {
    const userProduct = prompt("Введіть назву продукту, який би ви хотіли прибрати з корзини");
    if(VALIDATE(userProduct)) {
        return false;
    } else {
        for (let i = 0; i < array.length; i++) {
            if(typeof(array[i]) === "object" && array[i].productName === userProduct) {
                array.splice(i, 1);
            }
        }
        return array;
    } 
};
deleteProduct(productArray);
console.log(productArray);


//4. Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]

let myArray = [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

// Знайти суму та кількість позитивних елементів.
let positiveNumbers = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
        positiveNumbers += myArray[i];
    }
}
console.log(`Сума позитивних елементів = ${positiveNumbers}.`);

function getPositiveCount(arr) {
    return arr.filter(el => el > 0).length;
}
console.log("Кількість позитивних елементів: " + getPositiveCount(myArray) + ".");

// Знайти мінімальний елемент масиву та його порядковий номер.
const min = Math.min(...myArray);
const positionMinInArray = myArray.indexOf(min) + 1;
console.log(`Мінімальний елемент масиву: ${min}, його порядковий номер: ${positionMinInArray}.`);

// Знайти максимальний елемент масиву та його порядковий номер.
const max = Math.max(...myArray);
const positionMaxInArray = myArray.indexOf(max) + 1;
console.log(`Максимальний елемент масиву: ${max}, його порядковий номер: ${positionMaxInArray}.`);

// Визначити кількість негативних елементів.
function getNegativeCount(arr) {
    return arr.filter(el => el < 0).length;
}
console.log(getNegativeCount(myArray));    

// Знайти кількість непарних позитивних елементів.
function getOddPositive(arr) {
    return arr.filter(el => el > 0 && el % 2 !== 0).length;
}
console.log(getOddPositive(myArray));

// Знайти суму парних позитивних елементів.
let sumEvenPositive = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        sumEvenPositive += myArray[i];
    }
}
console.log(`Сума парних позитивних елементів = ${sumEvenPositive}.`);

// Знайти добуток позитивних елементів.
let productPositiveNumbers = 1;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
        productPositiveNumbers *= myArray[i];
    }
}
console.log(`Добуток позитивних елементів = ${productPositiveNumbers}.`);