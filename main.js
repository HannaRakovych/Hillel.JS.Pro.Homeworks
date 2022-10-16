// 1. Реалізувати фунцію-конструктор Автомобіля. Можливості автомобіля - почати поїздку, закінчити поїздку
// 3. Реалізувати 3 фунції-конструктори - Хетчбек, Універсал, Седан. Їхнім прототипом - має бути Автомобіль та його можливості відповідно
// 4. Окрім можливостей Автомобіля, ці 3 сутності повинні мати свої власні дані - розхід топлива, тип двигуна, об'єм двигуна, модель, рік випуску, маса, статус (або поїздка або готовий до поїздки) та справність авто
// 5. Статус авто - не можна почати нову поїздку не завершивши попередню. Статус має бути Boolean значенням. Де true - це Автомобіль зараз у поїздці. Та false - Автомобіль стоїть, можна починати нову поїздку
// 6. Відповідно методи Автомобіля почати та закінчити поїздку змінюють ці статуси у конкретного екземпляра
// 7. Справність авто - це число від 0-100. Від кожної поїздки на авто (викликаний методом почати поїздку) - справність зменшується
// 8. Кількість такої справності, яка зменшується визначати через Math.random. Випадкове число має бути в межах від 0.1 до 2.5
// 9. Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто
// 10. Створити функцію Дилер, яка приймає 1 аргумент - створений пунктом вище автомобіль (з його даними)
// 11. Функція Дилер визначає скільки коштуватиме ремонт машини відштовхуючись від прейскуранту цін наведених у таблиці
// 12. Дилер після ремонту має оновити справність конкретного авто до 100 та повідомити власнику ціну ремонту

function Auto(){
    // eslint-disable-next-line no-unused-vars
    const data = {...arguments[0]};
    this.fuelConsumption = arguments[0][0];
    this.engineType = arguments[0][1];
    this.egineVolume = arguments[0][2];
    this.model = arguments[0][3];
    this.year = arguments[0][4];
    this.mass = arguments[0][5];
    this.status = arguments[0][6];
    
    this.maintenance = 100;
}

function Hatchback(){
    Auto.apply(this, arguments);
}

function Sedan(){
    Auto.apply(this, arguments);
}

function Universal(){
    Auto.apply(this, arguments);
}

Hatchback.prototype = Object.create(Auto.prototype);
Sedan.prototype = Object.create(Auto.prototype);
Universal.prototype = Object.create(Auto.prototype);



const car_1 = new Hatchback(3.2, 'petrol', 2.6, 'Honda Civic', 2019, 1500, false);
const car_2 = new Sedan(6.1, 'petrol', 3.1, 'Honda Accord', 2017, 1640, true);
const car_3 = new Universal(2.5, 'petrol', 2.9, 'Volvo V90', 2021, 2130, true);


Auto.prototype.startRide = function() {
    if(!this.status){
        this.status = true;
        this.maintenance -= Math.floor(Math.random() * (2.5 - 0.1));
        return 'A car start a ride.';
    } else {
        return 'Error! The car cannot start the ride because it is already on the way.';
    }
}


Auto.prototype.endRide = function() {
    if(this.status){
        this.status = false;
        return 'A car stoped riding.';
    } else{
        return 'Error! A car has not moving so it cannot be stopped.';
    }
}

car_1.startRide();
car_1.endRide();
car_1.startRide();
car_1.startRide();
car_1.endRide();
car_1.endRide();
car_1.startRide();
car_1.endRide();

car_2.endRide();
car_2.startRide();
car_2.startRide();
car_2.endRide();
car_2.startRide();
car_1.endRide();

car_3.startRide();
car_3.startRide();
car_3.startRide();
car_3.endRide();
car_3.startRide();
car_3.endRide();


function dealer (obj) {
    let sum = 0;
    let coefficient = 0;
    let price = 100 - obj.maintenance;
    if (obj instanceof Hatchback) {
        if (obj.year > 2019 && obj.year < 2022) {
            coefficient += 1.2;
        } else if (obj.year > 2010 && obj.year < 2018) {
            coefficient += 1.4;
        } else if (obj.year > 2000 && obj.year < 2009) {
            coefficient += 1.7;
        } else if (obj.year > 1990 && obj.year < 1999) {
            coefficient += 2;
        }

        if (obj.engineType === 'diesel') {
            coefficient += 2.2;
        } else if (obj.engineType === 'petrol') {
            coefficient += 1.8;
        }

        if (obj.mass > 800 && obj.mass < 1100) {
            coefficient += 1.5;
        } else if (obj.mass > 1101 && obj.mass < 1400) {
            coefficient += 1.7;
        } else if (obj.mass > 1401) {
            coefficient += 2;
        }
        sum = (price * 110 * (obj.maintenance * coefficient)).toFixed(2);
        return `Repair price for ${obj.model}: ${sum}`;
    }

    else if (obj instanceof Sedan){
        if (obj.year > 2019 && obj.year < 2022) {
            coefficient += 1.5;
        } else if (obj.year > 2010 && obj.year < 2018) {
            coefficient += 1.8;
        } else if (obj.year > 2000 && obj.year < 2009) {
            coefficient += 2;
        } else if (obj.year >1990 && obj.year < 1999) {
            coefficient += 2.6;
        }

        if (obj.engineType === 'diesel') {
            coefficient += 2.5;
        } else if (obj.engineType === 'petrol') {
            coefficient += 2;
        }

        if (obj.mass > 800 && obj.mass < 1100) {
            coefficient += 1.6;
        }else if (obj.mass > 1101 && obj.mass < 1400) {
            coefficient += 1.8;
        } else if (obj.mass > 1401) {
            coefficient += 2.1;
        }

        sum = (price * 125 * (obj.maintenance * coefficient)).toFixed(2);
        return `Repair price for ${obj.model}: ${sum}`;
    }

    else if (obj instanceof Universal) {
        if (obj.year > 2019 && obj.year < 2022) {
            coefficient += 2;
        } else if (obj.year > 2010 && obj.year < 2018) {
            coefficient += 2.2;
        } else if (obj.year > 2000 && obj.year < 2009) {
            coefficient += 2.5;
        } else if (obj.year >1990 && obj.year < 1999) {
            coefficient += 3;
        }

        if (obj.engineType === 'diesel') {
            coefficient += 2.9;
        } else if (obj.engineType === 'petrol') {
            coefficient += 2.4;
        }

        if (obj.mass > 800 && obj.mass < 1100) {
            coefficient += 1.7;
        }else if (obj.mass > 1101 && obj.mass < 1400) {
            coefficient += 1.9;
        } else if (obj.mass > 1401) {
            coefficient += 2.2;
        }

        sum = (price * 130 * (obj.maintenance * coefficient)).toFixed(2);
        return `Repair price for ${obj.model}: ${sum}`;
    }
}

dealer(car_1);
dealer(car_2);
dealer(car_3);