let studentName = "Mahyar";
let grade = 92;

let classGrades = [45, 67, 89, 92, 55, 78, 95, 60, 88];

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let studentGrade = getGrade(grade);

let passedGrades = classGrades.filter(function(score) {
    return score >= 60;
});

let firstHighGrade = classGrades.find(function(score) {
    return score >= 90;
});

console.log(studentName);
console.log(grade);
console.log(studentGrade);
console.log(passedGrades);
console.log(firstHighGrade);