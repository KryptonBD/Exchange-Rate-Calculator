const currencyElOne = document.getElementById("currency-one");
const currencyElTwo = document.getElementById("currency-two");

const amountElOne = document.getElementById("amount-one");
const amountElTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapBtn = document.getElementById("swap");


function calculateRate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;
    const url =  "https://api.frankfurter.app/latest?from="
    // const url = https://api.ratesapi.io/api/latest?base=
    fetch(`${url}${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let rates = data.rates[currencyTwo];

        rateEl.innerText = `1 ${currencyOne} = ${rates} ${currencyTwo}`;

        amountElTwo.value = (amountElOne.value * rates).toFixed(2);
    }); 
}

currencyElOne.addEventListener("change", calculateRate);
currencyElTwo.addEventListener("change", calculateRate);

amountElOne.addEventListener("input", calculateRate);
amountElTwo.addEventListener("input", calculateRate);

swapBtn.addEventListener("click", ()=>{
    let temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculateRate();
})

calculateRate();