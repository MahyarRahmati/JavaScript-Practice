let foodPrices = [150, 200, 100, 180];

let total = 0;

for (let i = 0; i < foodPrices.length; i++) {
    total += foodPrices[i];
}

let hasDiscountCard = true;
let serviceFee = 0;
let discount = 0;

if (total >= 500) {
    serviceFee = total * 0.05;
}

if (hasDiscountCard) {
    discount = total * 0.10;
}

let finalAmount = total + serviceFee - discount;

console.log("Total:", total);
console.log("Service Fee:", serviceFee);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);