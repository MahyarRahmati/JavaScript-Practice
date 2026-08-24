let productName = "Laptop";
let stock = 25;

let productStocks = [15, 0, 45, 8, 30, 60];

function checkStock(stock) {
    if (stock === 0) {
        return "Out of Stock";
    } else if (stock < 10) {
        return "Low";
    } else if (stock <= 50) {
        return "Good";
    } else {
        return "High";
    }
}

let firstEmptyStock = productStocks.find(function(stock) {
    return stock === 0;
});

console.log(productName);
console.log(checkStock(stock));
console.log(firstEmptyStock);