function validate(input) {
    if (input === '' || input === ' ') {
        alert ('A field should has a value. Try one more time!');
    }
}

function validateIfNum(input) {
    if (!Number.isInteger(input)) {
    return false;
    }
}


//1.
const userYear = document.querySelector('.data-1');
const btnFindoutCentury = document.querySelector('.btn-1');
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

btnFindoutCentury.addEventListener('click', () => {
    resultCentury.innerHTML = `Result: ${userYear.value} is a ${determineCentury(userYear.value)} century.`
})

//2.
const usersRandomLetters = document.querySelector('.data-2');
const btnTask2 = document.querySelector('.btn-2');
const result2 = document.querySelector('.result-2');

function conversionToNum(value) {
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
    result2.innerHTML = `Result: ${conversionToNum(usersRandomLetters.value)}`
})

//3.
const userWordsInput = document.querySelector('.data-3');
const reverseBTN = document.querySelector('.btn-3');
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

reverseBTN.addEventListener('click', function (event){
    event.target;
    transformWords(userWordsInput.value);
})


//4.
const usersRandomNumbers = document.querySelector('.data-4');
const btnTask4 = document.querySelector('.btn-4');
const result4 = document.querySelector('.result-4');

function findoutLowestHighestNum(data) {
    if (validate(data) || validateIfNum(data)) {
        return result4.innerHTML = 'Result:';
    } else {
        let inputData = data.split(' ');
        let minNum = Math.min(...inputData);
        let maxNum = Math.max(...inputData);

        result4.innerHTML = `Min number: ${minNum}. Max number: ${maxNum}.`
    }
}

btnTask4.addEventListener('click', function (event) {
    event.target;
    findoutLowestHighestNum(usersRandomNumbers.value);
})

//5.
const phoneNumberInput = document.querySelector('.data-5');
const transformBTN = document.querySelector('.btn-5');
const phoneNumberResult = document.querySelector('.result-5');

function transformIntoPhoneNum(integers) {
    if (validate(integers) || validateIfNum(integers)) {
        alert ('Please try one more time!')
    } else if (integers.length !== 10) {
        alert ('Please try one more time! You should enter 10 integers.')
    } else {
        phoneNumberResult.innerHTML = `(${integers.slice(0, 3)}) ${integers.slice(3, 6)}  - ${integers.slice(6, 10)}`;
    }
}

transformBTN.addEventListener('click', function(event) {
    event.target;
    transformIntoPhoneNum(phoneNumberInput.value);
})
