let dailyBudget = 2000;

let expenses = [300, 500, 250, 400, 150];

let totalExpenses = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

function calculateRemainingMoney(budget, expenses) {
    let remainingMoney = budget - expenses;

    if (expenses > budget) {
        console.log("You have exceeded your budget");
    } else {
        console.log("You are within your budget");
    }

    return remainingMoney;
}

let remainingMoney = calculateRemainingMoney(dailyBudget, totalExpenses);

console.log("Daily Budget:", dailyBudget);
console.log("Total Expenses:", totalExpenses);
console.log("Remaining Money:", remainingMoney);