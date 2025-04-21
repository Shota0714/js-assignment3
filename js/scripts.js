const bridge = "https://v6.exchangerate-api.com/v6/";
// my api key
const apiKey = "5e2bb43faee57ebae1d5b992";

// decide the base and target currency
const baseCurrency = "CAD";
const targetCurrency = "JPY";

let method = "get";

// get the URL
const URL = `${bridge}${apiKey}/latest/${baseCurrency}`;

const rate = document.getElementById("rate");
const button = document.getElementById("btn");

// add event listener to the button
button.addEventListener("click", function() {
    updateExchangeRate();
});

// get the exchange rate
async function updateExchangeRate() {
    const response = await fetch(URL, {
        method: method,
        mode: "cors"
    });
    const data = await response.json();

    console.log("Success: ", data); 

    if (data.result === 'success') {
        const rateValue = data.conversion_rates[targetCurrency];
        rate.innerHTML = `1 ${baseCurrency} = ${rateValue} ${targetCurrency}`;
    }
};
