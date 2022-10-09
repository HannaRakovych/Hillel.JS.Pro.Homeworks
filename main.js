// 1. Створити функцію-конструктор Людини. Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, національність, країна, список країн для подорожей. Створити універсальні функції - знайомство, прокидатися, засинати й список країн, які Людина хоче відвідати. Роботу цих функцій можна виводити через console.log. Але в кожній з функцій повинно використовуватись якомога більше характеристик конкретної Людини на якій ця функція викликається (підказка: тут треба використати call/apply)

function CreatePerson (name, age, sex, nationality, country, countriesForVisiting) { 
    this.name = name; 
    this.age = age; 
    this.sex = sex; 
    this.nationality = nationality; 
    this.country = country; 
    this.countriesForVisiting = countriesForVisiting;   
  }

const acquaintance = function () { 
    console.log(`Hi. My name is ${this.name}, I'm from ${this.country}. Here is a list of countries that I'm going to visit: ${this.countriesForVisiting}!`) 
  }; 
const wakeUp = function () {
    console.log(`Hey, ${this.name} wake up! We're going back home to ${this.country}! I missed my family so much.. `)
}
const fallAsleep = function () {
    console.log(`Why doesn't ${this.name} go to sleep? She has to wake up early tomorrow because she has a train to ${this.country}!`)
}
const listCountiesToGo = function () {
    console.log(`${this.name} has been dreaming to visit ${this.countriesForVisiting} till she became ${this.age}.`)
}

const me = new CreatePerson('Anna', 30, 'female', 'ukrainian', 'Ukraine', ['England, France, Switzerland']); 

console.log(me); 

acquaintance.apply(me, [me.name, me.country, me.countriesForVisiting]);
wakeUp.apply(me, [me.name, me.country]);
fallAsleep.call(me, me.name, me.country);
listCountiesToGo.bind(me)(me.name, me.countriesForVisiting, me.age);


// 2. Створити власну реалізацію методу .bind (підказка: в кінці треба помістити цю власну функцію у прототип - Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] }

const shoes = {
    brand: "Loro Piana",
    type: "loffers",
}

// eslint-disable-next-line no-unused-vars
function dataObj(brand, type) {
    console.log(`My favourite type of shoes is a ${this.type} of a brand ${this.brand}.`)
}

const myOwnBind = function (func, info) {
    return func.apply(info);
}

myOwnBind(dataObj, shoes);

// 3. Cтворити функцію, котра приймає 2 параметри - об'єкти. Функція повинна перевіряти чи ці 2 обʼєкти абсолютно ідентичні та повертає результат у зрозумілому форматі

const dog_1 = {
    breed: "maltipoo",
    name: "Lola",
};

const dog_2 = {
    breed: "maltipoo",
    name: "Finik",
};

const dog_3 ={
    breed: "maltipoo",
    name: "Lola"
}

function checkObj(obj_1, obj_2){
    const prop_1 = Object.getOwnPropertyNames(obj_1);
    const prop_2 = Object.getOwnPropertyNames(obj_2);

    if (prop_1.length !== prop_2.length) {
        return false;
    } else if(obj_1[prop_1] !== obj_2[prop_2]){
        return false;
    } else if(JSON.stringify(obj_1) !== JSON.stringify(obj_2)){
        return false;
    } else{
        return true;
    }
}

console.log(checkObj(dog_1, dog_2)); //false
console.log(checkObj(dog_1, dog_3)); //true

/* 4. Створіть функцію-конструктор Calculator, який створює об’єкти з чотирма (або трьома) методами:
enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
calculateSum() повертає суму цих властивостей.
calculateNSD() повертає результат пошуку НСД
calculateNSK() повертає результат пошуку НСК */


function Calculator () {

    this.enterData = function () {
        this.a = +prompt("Enter a");
        this.b = +prompt("Enter b");
    }

    this.calculateSum = function () {
        return this.a + this.b;
    }

    this.calculateNSD = function () {
        let denominator = 0;
        for (let i = 0; i <= this.a && i <= this.b; i++) {
            if (this.a % i === 0 && this.b % i === 0) {
                denominator = i;
            }
        }
        if (denominator === 0) {
            return false;
        } else {
            return denominator;
        }
    }

    this.calculateNSK = function () {
        return (this.a * this.b) / this.calculateNSD ();
    }
}

const calculator = new Calculator();
calculator.enterData();
console.log(`Sum: ${calculator.calculateSum()}, NSD: ${calculator.calculateNSD()}, NSK: ${calculator.calculateNSK()}`);