//function sum(){
//    alert("test");
//}


//sum()//

function sum(number1, number2){
    return number1 + number2;
}

console.log(sum(10,5))
console.log(sum(11,65))
console.log(sum(10,52))
console.log(sum(10,53))
console.log(sum(10,57))
console.log(sum(10,50))
console.log(sum(102,5))

function toCelsius(f){
    return (f - 32) * 5 / 9;
}

console.log(toCelsius(50))
var arrowFunction = () => alert ("Hello World");
 var arrowFunction = name => alert (`Hello ${name}`);

 arrowFunction("Filan Fisteku");

 function dsFunction(){
     var localVar = "Digital School"
      alert(localVar);
}



function secondtomin(min){
    return (min * 60)
}

console.log(secondtomin(10))

function siperfaqja(baza, lartesi){
    return (baza + lartesi / 2)
}

console.log(siperfaqja(20, 10))

var car = { name: "Audi" , color: "red", year: 2020, kilometres: 0 }
console.log(car);

var car = {
    name: "Audi",
    color: "white",
    year: 2024,
    kilometres: 0,

    startEngine : function(){
        console.log("Vrommmmmmmm!!")
    }
}

console.log(car.name)
console.log(car.color)
console.log(car.year)
console.log(car.kilometres)
car.startEngine()

console.log(car['name'])
console.log(car['color'])
console.log(car['year'])
console.log(car['kilometres'])

console.log(car)
delete car.name;
console.log(car)
// console.log(car);

