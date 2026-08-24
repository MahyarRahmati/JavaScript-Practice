let customerBalance = 5000;
let selectedPackagePrice = 3000;
let packagePrices = [1000, 2000, 3000, 4000, 6000];

function canBuy(balance, price) {
    return balance >= price;
}

let availablePackages = packagePrices.filter(function(price) {
    return price <= customerBalance;
});

let i = 0;

while (i < packagePrices.length) {
    console.log(packagePrices[i]);
    i++;
}

console.log(canBuy(customerBalance, selectedPackagePrice));
console.log(availablePackages);