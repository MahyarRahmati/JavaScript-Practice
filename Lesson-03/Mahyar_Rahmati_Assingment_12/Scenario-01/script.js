
let productName = "Laptop";
let price = 1500;
let quantity = 4;

let prices = [1500, 2500, 180, 700, 3000];

function calculateTotal(prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}


let total = calculateTotal(prices);

console.log("productName:", productName);
console.log("price:", price);
console.log("quantity:", quantity);
console.log("total:", total);

if (total >= 5000) {
    let discount = total * 0.10;
    let finalPrice = total - discount;

    console.log("discount 10٪:", discount);
    console.log("finalPrice:", finalPrice);
} else {
    console.log("No discount");
}

let expensivePrices = prices.filter(function(price) {
    return price > 200;
});

console.log("Prices above 200 Afg:", expensivePrices);