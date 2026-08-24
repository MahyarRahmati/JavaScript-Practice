let products = [
    {id: 1, name: "rice", price: 1000, quantity:3, category:"food"},
    {id: 2, name: "egg", price: 1000, quantity:2, category:"food"},
    {id: 3, name: "cake", price: 1000, quantity:300, category:"food"},
    {id: 4, name: "alkozay", price: 1000, quantity:400, category:"drink"},
    {id: 5, name: "rani", price: 1000, quantity:500, category:"drink"},
    {id: 6, name: "pipssi", price: 1000, quantity:4, category:"drink"},
    {id: 7, name: "shirt", price: 1000, quantity:100, category:"cloth"},
    {id: 8, name: "dress", price: 1000, quantity:200, category:"cloth"},
    {id: 9, name: "cshirt", price: 1000, quantity:400, category:"cloth"},

]

let filter = products.filter (product=> product.category === "food" || product.category === "drink");
console.log(filter);

let filter = products.filter(product=> product.quantity < 5);
console.log(filter);

let total = 0;
products.forEach(p => total = total + p.quantity * p.price );
console.log(total);

products = products.filter (product=> product.category === "cloth" || product.category === "drink");
console.log(products);




const paragraph = document.querySelectorAll("p");
console.log(paragraph);

const h1 = document.querySelector("h1");
console.log(h1);

const div = document.querySelector("div");
const p = document.createElement("p");
p.textContent = "aliisali";
div.appendChild(p);
console.log(div);



const ul = document.querySelector("ul");

let products = [
    {name:"ali", price: 100},
    {name:"ahmad", price: 200},
    {name:"mama", price: 300},
    {name:"reza", price: 500},
    {name:"asafali", price: 400},
]

products.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element.name;
    ul.appendChild(li);
    console.log(li); 
});









