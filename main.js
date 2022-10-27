/* 1,2,3 - Створити сторінку, що буде показувати список продуктів для купівлі
Cписок продуктів для купівлі - масив, кожен елемент якого представлений нижче кодом. Довжина такого масиву - 15.
*/
// eslint-disable-next-line no-unused-vars
const productsListToBuy = [
    {
        productName: 'avocado',
        productData: {
            weight: 150,
            certificate: true,
            dateOfExpiry: '29/10/2022',
            sugarFree: true,
        },
        productProvider: 'OSEM',
        productCountry: 'IL',
        productPrice: 45,
    },
    {
        productName: 'milk',
        productData: {
            weight: 950,
            certificate: true,
            dateOfExpiry: '1/11/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 55.10,
    },
    {
        productName: 'bread',
        productData: {
            weight: 450,
            certificate: true,
            dateOfExpiry: '28/10/2022',
            sugarFree: false,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 37.50,
    },
    {
        productName: 'chocolate',
        productData: {
            weight: 500,
            certificate: true,
            dateOfExpiry: '19/08/2022',
            sugarFree: false,
        },
        productProvider: 'Q Chocolate',
        productCountry: 'BE',
        productPrice: 88.50,
    },
    {
        productName: 'cheese',
        productData: {
            weight: 300,
            certificate: true,
            dateOfExpiry: '19/03/2023',
            sugarFree: true,
        },
        productProvider: 'Ile De France',
        productCountry: 'FR',
        productPrice: 830,
    },
    {
        productName: 'onion',
        productData: {
            weight: 300,
            certificate: true,
            dateOfExpiry: '05/12/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 23.80,
    },
    {
        productName: 'apple',
        productData: {
            weight: 1090,
            certificate: false,
            dateOfExpiry: '22/12/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R..',
        productCountry: 'UA',
        productPrice: 24.30,
    },
    {
        productName: 'lemon',
        productData: {
            weight: 220,
            certificate: true,
            dateOfExpiry: '15/12/2022',
            sugarFree: true,
        },
        productProvider: 'Turkish wealth',
        productCountry: 'TR',
        productPrice: 68.90,
    },
    {
        productName: 'meat',
        productData: {
            weight: 1100,
            certificate: true,
            dateOfExpiry: '30/10/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 180.90,
    },
    {
        productName: 'banana',
        productData: {
            weight: 950,
            certificate: true,
            dateOfExpiry: '30/10/2022',
            sugarFree: true,
        },
        productProvider: 'TM FINI',
        productCountry: 'EC',
        productPrice: 47,
    },
    {
        productName: 'red wine',
        productData: {
            weight: 750,
            certificate: true,
            dateOfExpiry: '25/10/2031',
            sugarFree: true,
        },
        productProvider: 'Chateau Lafite Rothschild',
        productCountry: 'FR',
        productPrice: 358825,
    },
    {
        productName: 'coffee',
        productData: { 
            weight: 250,
            certificate: true,
            dateOfExpiry: '10/12/2022',
            sugarFree: true,
        },
        productProvider: 'LavAzza',
        productCountry: 'IT',
        productPrice: 430.25,
    },
    {
        productName: 'broccoli',
        productData: {
            weight: 1025,
            certificate: true,
            dateOfExpiry: '11/11/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R.',
        productCountry: 'UA',
        productPrice: 75.90,
    },
    {
        productName: 'salmon',
        productData: {
            weight: 300,
            certificate: true,
            dateOfExpiry: '30/10/2022',
            sugarFree: true,
        },
        productProvider: 'Egersund Seafood',
        productCountry: 'NO',
        productPrice: 240.90,
    },
    {
        productName: 'eggs',
        productData: {
            weight: 600,
            certificate: true,
            dateOfExpiry: '05/11/2022',
            sugarFree: true,
        },
        productProvider: 'FOP Skyba R.R',
        productCountry: 'UA',
        productPrice: 75.50,
    }
]

const sectionMain = document.createElement('section');
sectionMain.classList.add('products-list');
const body = document.body;
body.appendChild(sectionMain);

const sectionMain_heading = document.createElement('h1');
sectionMain.appendChild(sectionMain_heading);
sectionMain_heading.innerHTML = 'List of products to buy';

// 4. Сформувати список покупок у вигляді списку (<ul> з <li>)
const sectionMain_ul = document.createElement('ul');
sectionMain.appendChild(sectionMain_ul);

// 6. productCountry - повинен бути <img /> із відповідним прапором
const showFlag = (obj) => {
    if (obj.productCountry === 'UA') {
        return './images/Ukraine.png';
    } else if (obj.productCountry === 'EC') {
        return './images/Ecuador.png';
    } else if (obj.productCountry === 'FR') {
        return './images/France.png';
    } else if (obj.productCountry === 'IL') {
        return './images/Israel.png';
    } else if (obj.productCountry === 'IT') {
        return './images/Italy.png';
    } else if (obj.productCountry === 'NO') {
        return './images/Norway.png';
    } else if (obj.productCountry === 'TR') {
        return './images/Turkey.png';
    } else if (obj.productCountry === 'BE') {
        return './images/Belgium.png';
    } 
}

// 7. Якщо товар не сертифікований - додавати стилізований знак оклику (!), щоб користувач звернув увагу

const attract_customer_attention = (obj) => {
    const span = document.createElement('span');
    if (obj.productData.certificate !== true) {
        span.classList.add('attention');
        span.innerHTML = '!';
    } else {
        span.innerHTML = '';
    }
    return span;
}


//4. (continue)...
// eslint-disable-next-line no-unused-vars
const addElementToUl = () => {
    for (let i = 1; i <= productsListToBuy.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<div class = "list-el"><p>${productsListToBuy[i].productName}.
            weight: ${productsListToBuy[i].productData.weight}.
            price: ${productsListToBuy[i].productPrice}.
            country: ${productsListToBuy[i].productCountry} <img src="${showFlag(productsListToBuy[i])}" alt="Flag">
            provider: ${productsListToBuy[i].productProvider}
            sugar free: ${productsListToBuy[i].productData.sugarFree}.
            date of expiry: ${productsListToBuy[i].productData.dateOfExpiry}.
            certificate: ${productsListToBuy[i].productData.certificate}.
            <p></div>`;

    li.appendChild(attract_customer_attention(productsListToBuy[i]));
    if (i % 2 === 0) {
        li.style.background = 'lightyellow'
    } else (li.style.background = 'lightblue')
    sectionMain_ul.appendChild(li);
    }
}

const additionalInfo = document.createElement('div');
additionalInfo.classList.add('additional-info');
sectionMain.appendChild(additionalInfo);

// 9. Додати будь-який HTML-тег, в якого записати вартість всього продуктового кошика
const totalPriceBasket = document.createElement('div');
totalPriceBasket.classList.add('total-price__food-basket');
additionalInfo.appendChild(totalPriceBasket);

const showSum = () => {
    let sum = 0;
    for (let i = 0; i < productsListToBuy.length; i++) {
        sum += productsListToBuy[i].productPrice;
    }
    return sum.toFixed(2);
}

const headingBasket = document.createElement('h3');
headingBasket.innerHTML = 'Basket sum: ' + showSum();
totalPriceBasket.appendChild(headingBasket);

// 10. Додати будь-який HTML-тег, в якого записати найдорожчий із продуктів цього кошика
const maxPriceProduct = document.createElement('div');
maxPriceProduct.classList.add('max-price-product__food-basket');
additionalInfo.appendChild(maxPriceProduct);

const findMaxPriceProduct = () => {
    const max = Math.max(...productsListToBuy.map(item => item.productPrice));
    const mostExpensiveProduct = productsListToBuy.find(item => item.productPrice === max).productName;
    return `${max} for ${mostExpensiveProduct}`;
}

const maxPriceHeading = document.createElement('h3');
maxPriceHeading.innerHTML = `The most expensive product is: ${findMaxPriceProduct()}`;
maxPriceProduct.appendChild(maxPriceHeading);

// 11. Додати будь-який HTML-тег, в якого записати середню ціну по продуктах
const averagePrice = document.createElement('div');
additionalInfo.appendChild(averagePrice);

const findAveragePrice = () => {
    const averagePrice = Math.round((showSum() / productsListToBuy.length) * 100) /100;
    return averagePrice;
}

const averagePriceHeading = document.createElement('h3');
averagePriceHeading.innerHTML = `Average price of the products in the basket: ${findAveragePrice()}`;
averagePrice.appendChild(averagePriceHeading);

addElementToUl();