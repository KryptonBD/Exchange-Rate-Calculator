const currencyElOne = document.getElementById("currency-one");
const currencyElTwo = document.getElementById("currency-two");

const amountElOne = document.getElementById("amount-one");
const amountElTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapBtn = document.getElementById("swap");


function calculateRate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;

    fetch(`https://api.ratesapi.io/api/latest?base=${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.rates[currencyTwo]);
    }); 
}

currencyElOne.addEventListener("change", calculateRate);
currencyElTwo.addEventListener("change", calculateRate);

amountElOne.addEventListener("input", calculateRate);
amountElTwo.addEventListener("input", calculateRate);

