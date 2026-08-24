let customerName = "John";
let hourlyRate = 500;
let workingHours = 8;
let taskHours = [2, 5, 4, 7, 3, 6];

function calculateBill(rate, hours) {
    return rate * hours;
}

let bill = calculateBill(hourlyRate, workingHours);

let longTasks = taskHours.filter(function(hours) {
    return hours > 4;
});

let paymentStatus = "Paid";

console.log("Customer:", customerName);
console.log("Bill:", bill);
console.log("Tasks over 4 hours:", longTasks);
console.log("Payment Status:", paymentStatus);