let prices = [500, 1200, 800, 2500, 1500, -100, "2000"];

let quantity = 10;
let stockStatus = true;

function calculateTotal(prices) {
    let total = 0;

    for (let price of prices) {
        if (typeof price !== "number" || price < 0) {
            continue;
        }

        total += price;
    }

    return total;
}

let total = calculateTotal(prices);

console.log("Total:", total, "AFN");

let expensivePrices = prices.filter(price => {
    return typeof price === "number" && price > 1000;
});

console.log("Prices over 1000:", expensivePrices);

let firstOver2000 = prices.find(price => {
    return typeof price === "number" && price > 2000;
});

console.log("First price over 2000:", firstOver2000);