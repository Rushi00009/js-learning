let person = {
    name: "Rushi",
    city: "Pune",
    pin: 411057

}

// object Destructuring 
// const myName = person.name;
// let city = person.city;
// let pin = person.pin;

let { name, city, pin, isMarried = true } = person;
console.log(`name : ${name}, c/ity : ${city}, Pin : ${pin}, IsMarried : ${isMarried}`);

// Array Destructuring 
const array = ["Rushi", "Bill", "Stew"];
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2]; 

let [element0, element1, element2, element3 = "Elone"] = array;
console.log(`element0 : ${element0}, element1 : ${element1}, element2 : ${element2},element3 : ${element3}`);