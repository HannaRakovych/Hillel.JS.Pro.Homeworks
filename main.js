/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Вимоги до Домашки:

1) Input-поле із кнопкою «Start timeout» — у інпут-полі користувач може ввести кількість відповідних секунд, які залишилися у росії та росіяни до їх зникнення */

const secondsLeft = document.querySelector('.put-seconds-to-destruction');
const starter = document.querySelector('.btn-timeout-message');

const kremlinOnFire = () => {
    window.open("https://mayday.rocks/wp-content/uploads/2019/04/maxresdefault-211.jpg");
}

starter.addEventListener('click', (event) => {
    event.preventDefault();
    if(secondsLeft.value === ''){
        alert('Поле не може бути пустим!');
    } else {
    setTimeout(kremlinOnFire, secondsLeft.value * 1000);
}
})

/* 2) Input-поле з типом date та кнопка Start Campaign. Користувач обирає дату. Після того, rклікає Start Campaign. Задача - відобразити таймер, до дати яку обрав користувач у вигляді "До старту кампанії залишилосьРОКИ:МІСЯЦІ:ГОДИНИ:ХВИЛИНИ". */

const chosenDate = document.querySelector('.put-date');
const starterBTN = document.querySelector('.btn-timeout-date');
let timer = null;

starterBTN.addEventListener('click', () => {
  const countdown = chosenDate.value.trim();
  if (!countdown || countdown.length === 0) {
    document.querySelector('.end-time').innerHTML = "Empty value is not allowed, please choose a date.";
    return false;
  }

  const endDate = new Date(countdown).getTime();
  let dateNow = new Date().getTime();
  if (endDate <= dateNow) {
    document.querySelector('.end-time').innerHTML = `Enter the valid date, ${chosenDate.value} is not valid.`;
    return false;
  }

  if (timer) clearInterval(timer);

  timer = setInterval(function () {
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 3600 * msPerSecond;
    const msPerDay = 86400 * msPerSecond;
    const msPerMonth = 86400 * 30 * msPerSecond;
    const msPerYear = 86400 * 365 * msPerSecond;

    let dateNow = new Date().getTime();
    let distance = endDate - dateNow;

    let years = Math.floor(distance / msPerYear);
    let months = Math.floor((distance % msPerYear) / msPerMonth);
    let days = Math.floor((distance % msPerMonth) / msPerDay);
    let hours = Math.floor((distance % msPerDay) / msPerHour);
    let minutes = Math.floor((distance % msPerHour) / msPerMinute);
    let seconds = Math.floor((distance % msPerMinute) / msPerSecond);

    document.querySelector('.end-time').innerHTML = `До старту кампанії залишилось: ${years} років / ${months} місяців / ${days} днів / ${hours} годин / ${minutes} хвилин.`}, 1000);
});


/*3. select-поля та кнопка Calculate. Поле 1 - модель телефону. Поле 2 - кількість оперативно] пам'яті. Поле 3 - обʼєм вбудованої пам'яті. При натисканні на кнопку - вивести ціну обраного телефону. Зауважте, що кожний телефон може мати всі поля, тобто уявімо, що всі iPhone/Samsung/Pixel/OnePlus можуть мати 2, 4, 6 та 8 ГБ оперативнох пам'яті, та 64, 128, 256 та 512 ГБ вбудованої пам'яті. Але ціноутворення відрізняється. Тобто iPhone/64/512 коштуватиме дорожче за Samsung/64/512. */ 

const sectionCalculate = document.querySelector('.calculate-cost');
const choosePhoneModel = document.querySelector('.calculate-phone-price');
const chooseRAM = document.querySelector('.ram');
const chooseBuiltinMemo = document.querySelector('.built-in-memory');
const btnCalculatePrice = document.querySelector('.calculate-btn');

function calculatePhonePrice() {
    let sum = 0;
    if (choosePhoneModel.value === 'Iphone') {
        sum = 40000;
    } else if (selectPhone.value === 'Samsung') {
        sum = 25000;
    } else if (selectPhone.value === 'Pixel') {
        sum = 11000;
    } else if (selectPhone.value === 'OnePlus') {
        sum = 10500;
    }

    if (chooseRAM.value === '2') {
        sum += 1000;
    } else if (chooseRAM.value === '4') {
        sum += 3000;
    } else if (chooseRAM.value === '6') {
        sum += 5000;
    } else if (chooseRAM.value === '8') {
        sum += 7000;
    }

    if (chooseBuiltinMemo.value === '64') {
        sum += 1500;
    } else if (chooseBuiltinMemo.value === '128') {
        sum += 2500;
    } else if (chooseBuiltinMemo.value === '256') {
        sum += 4000;
    } else if (chooseBuiltinMemo.value === '512') {
        sum += 6000;
    }

    const showPrice = document.createElement('p');
    showPrice.className = 'calculate-result';
    showPrice.innerHTML = `You chose ${choosePhoneModel.value} which has ${chooseRAM.value} of RAM and ${chooseBuiltinMemo.value} of built in memory.<br> Price: ${sum} UAH.`;
    sectionCalculate.appendChild(showPrice);
}

btnCalculatePrice.addEventListener('click', (event) => {
    event.target;
    calculatePhonePrice();
})


