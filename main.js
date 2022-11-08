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
    if (inputValue === '1000') {
        resultCentury.innerHTML = `Result: It is a 10th century.`
        userYear.innerHTML = " ";
    } else if (inputValue > 1000 && inputValue < 1101) {
        resultCentury.innerHTML = `Result: It is a 11th century.`;
    } else if (inputValue > 1100 && inputValue < 1201) {
        resultCentury.innerHTML = `Result: It is a 12th century.`;
    } else if (inputValue > 1200 && inputValue < 1301) {
        resultCentury.innerHTML = `Result: It is a 13th century.`;
    } else if (inputValue > 1300 && inputValue < 1401) {
        resultCentury.innerHTML = `Result: It is a 14th century.`;
    } else if (inputValue > 1400 && inputValue < 1501) {
        resultCentury.innerHTML = `Result: It is a 15th century.`;
    } else if (inputValue > 1500 && inputValue < 1601) {
        resultCentury.innerHTML = `Result: It is a 16th century.`;
    } else if (inputValue > 1600 && inputValue < 1701) {
        resultCentury.innerHTML = `Result: It is a 17th century.`;
    } else if (inputValue > 1700 && inputValue < 1801) {
        resultCentury.innerHTML = `Result: It is a 18th century.`;
    } else if (inputValue > 1800 && inputValue < 1901) {
        resultCentury.innerHTML = `Result: It is a 19th century.`;
    } else if (inputValue > 1900 && inputValue < 2001) {
        resultCentury.innerHTML = `Result: It is a 20th century.`;
    } else if (inputValue > 2000 && inputValue < 2101) {
        resultCentury.innerHTML = `Result: It is a 21th century.`;
    } else if (inputValue.length > 4 || inputValue.length < 4 || validateIfNum(inputValue)) {
        alert ('You made a mistake. Try one more time!');
    } else if (inputValue > 2100) {
        alert ('Put the year less then 2100 please');
    } else if (validate(inputValue)) {
        return 'A field should has a value. Try one more time!';
    } 
}

btnFindoutCentury.addEventListener('click', function (event) {
    event.target;
    determineCentury(userYear.value);
})

//2.
const usersRandomLetters = document.querySelector('.data-2');
const btnTask2 = document.querySelector('.btn-2');
const result2 = document.querySelector('.result-2');

function conversionToNum(value) {
    const vowels = 'aeiouy';
    const consonants = 'bcdfgklmnpqstvxzhrw';
    const symbols = '.,- '
    let newString = '';
    validate(value);

    for (let i = 0; i < value.length; i++) {
        const el = value[i];

        if (vowels.includes(el)) {
            newString += 1;
        } else if (consonants.includes(el)) {
            newString += 0;
        } else if (symbols.includes(el)) {
            newString += 0;
        }
    }
    result2.innerHTML = `Result: ${newString}`;
}

btnTask2.addEventListener('click', function(event) {
    event.target;
    conversionToNum(usersRandomLetters.value)
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
        phoneNumberResult.innerHTML = `(${integers.slice(0, 3)}) ${integers.slice(3, 6)}  ${integers.slice(6, 8)} ${integers.slice(8, 10)}`;
    }
}

transformBTN.addEventListener('click', function(event) {
    event.target;
    transformIntoPhoneNum(phoneNumberInput.value);
})
