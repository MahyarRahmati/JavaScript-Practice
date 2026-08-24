let travelDistance = "15";
let distance = Number(travelDistance);

let baseFare = 50;
let pricePerKm = 20;
let isRushHour = true;

function calculateFare(distance, baseFare, pricePerKm) {
    let fare = baseFare + (distance * pricePerKm);

    if (isRushHour) {
        fare = fare * 1.10;
    }

    return fare;
}

let distances = ["5", "10", "15", "20", "25"];

let fares = distances.map(function(distance) {
    return calculateFare(Number(distance), baseFare, pricePerKm);
});

console.log(distance);
console.log(calculateFare(distance, baseFare, pricePerKm));
console.log(fares);