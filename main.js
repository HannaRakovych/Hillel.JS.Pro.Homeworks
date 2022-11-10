function validate(input) {
    if (input === '' || input === ' ') {
        alert ('A field should has a value. Try one more time!');
    }
}

// eslint-disable-next-line no-unused-vars
function validateIfNum(input) {
    if (!Number.isInteger(input)) {
    return false;
    }
}


//1.
const userYear = document.querySelector('.data-1');
const btnFindOutCentury = document.querySelector('.btn-1');
const resultCentury = document.querySelector('.result-1');

function determineCentury(inputValue) {
    let century = Math.floor(inputValue / 100) + 1;
    switch(century % 10) {

        case 1:
            century = century + 'st';
            break;
        case 2:
            century = century + 'nd';
            break;
        case 3:
            century = century + 'rd';
            break;
        default:
            century = century + 'th';
    }
    return century;
}

btnFindOutCentury.addEventListener('click', () => {
    if (userYear.value < 1 || userYear.value > 9999) {
        alert ('Try one more time. You have put an incorrect value.');
        return;
    }
    resultCentury.innerHTML = `Result: ${userYear.value} is a ${determineCentury(userYear.value)} century.`
})

//2.
const usersRandomLetters = document.querySelector('.data-2');
const btnTask2 = document.querySelector('.btn-2');
const result2 = document.querySelector('.result-2');

function vowelOne(value) {
    const vowels = 'aeiouy';
    let result = '';
    validate(value);

    for (let letter of value) {
        if (vowels.includes(letter)) {
            result += '1';
        } else {
            result += '0';
        }
    }
    return result;
}

btnTask2.addEventListener('click', () => {
    result2.innerHTML = `Result: ${vowelOne(usersRandomLetters.value)}`
})

//3.
const userWordsInput = document.querySelector('.data-3');
const reverseBtn = document.querySelector('.btn-3');
const showReverseWords = document.querySelector('.result-3');

function transformWords(string) {
    let words = string.split(' ');
    let reversedWord = '';
    let result = '';
    if (validate(string)) {
        return false;
    }
    for(let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            reversedWord = words[i].split('').reverse();
            result += ` ${reversedWord.join('')} `;
        } else {
            result += ` ${words[i]} `
        }
    }

    showReverseWords.innerHTML = words.length >= 5 ? `Result: ${result.split(' ').join('')}` : `${result}`;
}

reverseBtn.addEventListener('click', function (event){
    event.target;
    transformWords(userWordsInput.value);
})


//4.
const usersRandomNumbers = document.querySelector('.data-4');
const btnTask4 = document.querySelector('.btn-4');
const result4 = document.querySelector('.result-4');
let numbers = [];

function highAndLow(inputString) {
    if (validate(inputString)) {
        return;
    } else {
        numbers = inputString.split(" ");
        numbers.sort((a, b) => b - a);
        result4.innerHTML = `Result: ${numbers[numbers.length - 1]} min, ${numbers[0]} max.`;
    }   
}

btnTask4.addEventListener('click', function() {
    highAndLow(usersRandomNumbers.value);
})

//5.
const phoneNumberInput = document.querySelector('.data-5');
const transformBtn = document.querySelector('.btn-5');
const phoneNumberResult = document.querySelector('.result-5');

const arrayOfNum = [];

phoneNumberInput.addEventListener('input', (event) => {
    const el = event.data;
    if (el && !isNaN(el)) {
        arrayOfNum.push(el);
    }
    if (!el) {
        arrayOfNum.pop();
    }
});

function createPhoneNumber(value) {
    if (value && value.length === 10) {
        const phoneNum = value.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
        phoneNumberResult.innerHTML = `Result: ${phoneNum}`;
    } else {
        phoneNumberResult.innerHTML = "You have made some mistake. Put ten numbers!"
    }
    arrayOfNum.length = 0;
    phoneNumberInput.value = "";
}

transformBtn.addEventListener('click', () => {
    createPhoneNumber(arrayOfNum);
})
