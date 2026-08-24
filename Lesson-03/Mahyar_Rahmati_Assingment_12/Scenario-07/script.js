let attendance = [true, true, false, true, false, true, true, true, false, true];

let presentCount = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
        presentCount++;
    }
}

function calculateAttendance(present, total) {
    let percentage = (present / total) * 100;

    if (percentage >= 75) {
        return {
            percentage: percentage,
            status: "Passed"
        };
    } else {
        return {
            percentage: percentage,
            status: "Failed"
        };
    }
}

let result = calculateAttendance(presentCount, attendance.length);

console.log("Present:", presentCount);
console.log("Attendance:", result.percentage + "%");
console.log("Status:", result.status);