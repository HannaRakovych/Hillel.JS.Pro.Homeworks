const VALIDATE = (prop) => {
    if (prop === undefined || prop === null) {
        return true;
    }
    return false;
}

// 1. Cтворити функцію, яка створює та реєструє нову команду у автопробізі. Під час виклику функції потрібно передати дані про команду - назва команди, ім'я водія, рік народження водія, марка автомобіля, спонсор команди та чи водій допущений до автопробігу

// 1st var
const CAR_RACE_TEAM = (teamName, driverName, yearOfBirth, carBrand, sponsor, isAllowed) => {
    if (VALIDATE(teamName) || VALIDATE(driverName) || VALIDATE(yearOfBirth) || VALIDATE(carBrand) || VALIDATE(sponsor) || VALIDATE(isAllowed) || isNaN(yearOfBirth)) {
        console.log("Something went wrong! Check the information and try to fill one more time.");
    } else {
        const NEW_TEAM = {
            teamName: teamName,
            driverName: driverName,
            yearOfBirth: yearOfBirth,
            carBrand: carBrand,
            sponsor: sponsor,
            isAllowed: isAllowed,
        } 
        console.log(NEW_TEAM);
    }
}
CAR_RACE_TEAM('Speed', 'Antony', 1992, 'Ferrari', 'F1', true)

// 2nd var
function NEW_TEAM (teamName, driverName, yearOfBirth, carBrand, sponsor, isAllowed) {
    if (VALIDATE(teamName) || VALIDATE(driverName) || VALIDATE(yearOfBirth) || VALIDATE(carBrand) || VALIDATE(sponsor) || VALIDATE(isAllowed) || isNaN(yearOfBirth)) {
        console.log("Something went wrong! Check the information and try to fill one more time.");
    } else {
    this.teamName = teamName;
    this.driverName = driverName;
    this.yearOfBirth = yearOfBirth;
    this.carBrand = carBrand;
    this.sponsor = sponsor;
    this.isAllowed = isAllowed;
    }
}

const NEW_TEAM_1 = new NEW_TEAM ('Speed', 'Antony', 1992, 'Ferrari', 'F1', ); 
console.log(NEW_TEAM_1); // Something went wrong! Check the information and try to fill one more time.
const NEW_TEAM_2 = new NEW_TEAM ('Fire', 'John', 1990, 'Lamborghini', 'F1', false);
console.log(NEW_TEAM_2);

// 2. Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт. Дані про користувача - логін, пароль, місто, країна, стать, вік
const USER_1 = {};
USER_1.login = prompt("Enter login");
USER_1.pass = prompt("Enter password");
USER_1.city = prompt("What is your city?");
USER_1.country = prompt("What country are you from?");
USER_1.male = prompt("What is your mail?");
USER_1.age = prompt("What is your age?");
console.log(USER_1)


// 3. Створити функцію, яка буде міняти дані в конкретного користувача створеного пунктом вище. Наприклад сhangeUserData(user_1, city, 'Kherson). Де user_1 - обʼєкт в якому буде мінятись, city - поле, яке буде мінятися на нове значення - 'Kherson'
const CHANGE_USER_DATA = (obj) => {
    USER_1.city = "Kherson";
    console.log(USER_1)
}
CHANGE_USER_DATA(USER_1)

// 4. Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework. greeting - метод, котрий виводить повідомлення через console.log('Hi. everyone!'). addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait')
const STUDENT = {
    name: "Stas",
    surname: "Kryzhanivsky",
    age: 37,
    course: 4,
    city: "Odessa",
    greeting: function() {
        console.log('Hi. everyone!');
    },
    addHomework: function() {
        console.log('Sending my howework... Please, wait')
    },
}
console.log(STUDENT);
console.log(STUDENT.greeting);
console.log(STUDENT.addHomework);


// 5. Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.
const IS_EMPTY = (obj) => {
    for (let key in obj) {
        return "false";
    } 
        return "true";
    }

const OBJECT = {};
const OBJECT_2 = {
    name: "Anna",
    age: 30
};

console.log(IS_EMPTY(OBJECT)); // true
console.log(IS_EMPTY(OBJECT_2)); // false

// 6. Створити об’єкт для зберігання виручки команди продавців, наприклад: {Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829}
const INCOME_OF_THE_TEAM = {
    Taras: 2000, 
    Marta: 10,
    Ivan: 1200, 
    Petro: 400, 
    Roma: 366, 
    Alina: 829
}


// 7. Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log
const TOTAL_INCOME = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    console.log(sum);
}

TOTAL_INCOME(INCOME_OF_THE_TEAM);


// 8. Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі
const GET_MIN_VALUE = (obj) => {
    const MIN_VALUE = Math.min.apply(null, Object.values(obj));
    console.log(`${Object.keys(obj).filter(k => obj[k] === MIN_VALUE)} got the smallest income.`);
}

GET_MIN_VALUE(INCOME_OF_THE_TEAM);

// 9. Створити фукнцію, яка знаходить продавця з найбільшою виручкою та виводить результат через сonsole.log у зрозумілому форматі
const GET_MAX_VALUE = (obj) => {
    const MAX_VALUE = Math.max.apply(null, Object.values(obj));
    console.log(`${Object.keys(obj).filter(k => obj[k] === MAX_VALUE)} got the biggest income.`);
}

GET_MAX_VALUE(INCOME_OF_THE_TEAM);

// 10. Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі
const GET_RANDOM_SELLER = (obj) => {
    const RANDOM_SELLER = Math.floor(Math.random() * (Object.keys(obj).length) + 0);
    const RESULT = Object.keys(obj);
    console.log(`I congratulate you ${RESULT[RANDOM_SELLER]}! You are the best seller this month :)`) 
}
GET_RANDOM_SELLER(INCOME_OF_THE_TEAM)

