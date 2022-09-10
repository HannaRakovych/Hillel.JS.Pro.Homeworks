// 1. Додати 0.1 та 0.2 так, що був правильний математичний результат
// const NUM1 = 0.1;
// const NUM2 = 0.2;

// const RES1 = NUM1 * 10;
// const RES2 = NUM2 * 10;

// const MATH_RES = (RES1 + RES2) / 10;
// console.log(MATH_RES);

const MATH_RES = +(0.1 + 0.2).toFixed(1);
console.log(MATH_RES);


// 2. Зберегти логін користувача із prompt
const USER_LOGIN = prompt("Введіть свій логін");
console.log(USER_LOGIN);

// 3. Зберегти пароль користувача із prompt
const USER_PASSWORD = prompt("Введіть свій пароль");
console.log(USER_PASSWORD);

/* 4. Задати умову так, щоб перевіряти чи користувач має змогу зайти в admin-панель
Для того, щоб користувач зайшов в адмін панель, логін та пароль мають бути: admin та 12pass33210 відповідно
Якщо користувач правильно ввів дані - показуємо в console, що він успішно залогінений
Якщо ввів невірно пароль - повідомляємо, що проблема з логіном або паролем
Якщо ввів невірно логін - повідомляємо, що проблема з логіном або паролем
Якщо ввів обидва невірно - повідомляємо, що такий користувач немає доступу до admin-панелі */

if (USER_LOGIN === 'admin' && USER_PASSWORD === '12pass33210') {
    console.log("Ви успішно залогінені :)")
} else if (USER_LOGIN === 'admin' || USER_PASSWORD === '12pass33210') {
    console.log("Проблема з логіном або паролем :(")
} else {
    console.log("Нажаль Ви не маєте доступу до admin-панелі.")
}
                                                    // 2nd variant - ternary operator

let userPass = USER_LOGIN === 'admin' && USER_PASSWORD === '12pass33210' ? console.log("Ви успішно залогінені :)") 
    : USER_LOGIN === 'admin' || USER_PASSWORD === '12pass33210' ? console.log("Проблема з логіном або паролем :(") 
    : console.log("Нажаль Ви не маєте доступу до admin-панелі.");


// 5. Запитати в користувача та зберегти кількість грошей, які в нього є.
const USER_CASH = +prompt("Вибачте за нескромне питання, але скільки грошей Ви маєте...?)");
console.log(USER_CASH);

// 6. Через console.log показати прейскурант цін (Кавун: 21 грн, Морква: 8 грн, Картопля: 12 грн тощо)
const WATERMELON_PRICE = 21;
const CARROT_PRICE = 8;
const POTTATO_PRICE = 12;

console.log(`Кавун: ${WATERMELON_PRICE} грн, Морква: ${CARROT_PRICE} грн, Картопля: ${POTTATO_PRICE} грн`)

// 7. Запитати в користувача, що він б хотів купити
const GOODS_TO_BUY = prompt("Щоб Ви хотіли придбати в нашому магазині?)");
console.log(GOODS_TO_BUY);

// 8. Порахувати максимальну кількість придбаного продукту який він обрав та який залишок в нього залишиться. Наприклад: користувач ввів 100 грн й захотів купити кавуни. Максимальна кількість кавунів - 4 шт. та залишок 16 грн.

if (GOODS_TO_BUY === 'Кавун' || GOODS_TO_BUY === 'кавун') {
    const AMOUNT_WATERMELON = Math.floor(USER_CASH / WATERMELON_PRICE);
    const CHANGE_WATERMELON = USER_CASH % WATERMELON_PRICE;
    console.log(`Максимальна кількість кавунів - ${AMOUNT_WATERMELON} шт. та залишок ${CHANGE_WATERMELON} грн.`)
} else if (GOODS_TO_BUY === 'Морква' || GOODS_TO_BUY === 'морква' || GOODS_TO_BUY === 'Моркву' || GOODS_TO_BUY === 'моркву') {
    const AMOUNT_CARROT = Math.floor(USER_CASH / CARROT_PRICE);
    const CHANGE_CARROT = USER_CASH % CARROT_PRICE;
    console.log(`Максимальна кількість моркви - ${AMOUNT_CARROT} шт. та залишок ${CHANGE_CARROT} грн.`)
} else if (GOODS_TO_BUY === 'Картопля' || GOODS_TO_BUY === 'картопля' || GOODS_TO_BUY === 'Картоплю' || GOODS_TO_BUY === 'картоплю') {
    const AMOUNT_POTTATO = Math.floor(USER_CASH / POTTATO_PRICE);
    const CHANGE_POTTATO = USER_CASH % POTTATO_PRICE;
    console.log(`Максимальна кількість картоплі - ${AMOUNT_POTTATO} шт. та залишок ${CHANGE_POTTATO} грн.`)
} else {
    console.log("Нажаль такого товару в нас на разі не має :(. Виберіть із доступних позицій або приходьте пізніше...")
}


// 9. Запитати у користувача дані про трикутник - три сторони (три окремі prompt)
const TRIANGLE_SIDE_1 = +prompt("Вкажіть розмір першої сторони трикутника");
console.log(TRIANGLE_SIDE_1);

const TRIANGLE_SIDE_2 = +prompt("Вкажіть розмір другої сторони трикутника");
console.log(TRIANGLE_SIDE_2);

const TRIANGLE_SIDE_3 = +prompt("Вкажіть розмір третьої сторони трикутника");
console.log(TRIANGLE_SIDE_3);

// 10. Необхідно визначити, чи такий трикутник існує

if (TRIANGLE_SIDE_1 + TRIANGLE_SIDE_2 > TRIANGLE_SIDE_3 && TRIANGLE_SIDE_2 + TRIANGLE_SIDE_3 > TRIANGLE_SIDE_1 && TRIANGLE_SIDE_1 + TRIANGLE_SIDE_3 > TRIANGLE_SIDE_2) {
    console.log("Ваш трикутник існує.")
} else {
    console.log("Трикутника не існує.")
}

                                                    // 2nd variant - ternary operator

const TRIANGLE_EXIST_OR_NOT = TRIANGLE_SIDE_1 + TRIANGLE_SIDE_2 > TRIANGLE_SIDE_3 && TRIANGLE_SIDE_2 + TRIANGLE_SIDE_3 > TRIANGLE_SIDE_1 && TRIANGLE_SIDE_1 + TRIANGLE_SIDE_3 > TRIANGLE_SIDE_2 ? console.log("Ваш трикутник існує.") : console.log("Трикутника не існує.");



// 11. Обрахувати значення наступних виразів

    2 && 0 && 3 || true && false 
    0 || false

        false;

    false || " " || 3 && true 
    false || " " || true
    " " || true

        " "; (true)

    1 && 1000 && '0' || 0 && 'Bob' 
    '0' || 0 

        '0'; (true)

    -1 || 0 || 0 && "" || 1010 
    -1 || 0 || 0 || 1010 

        -1; (true)
