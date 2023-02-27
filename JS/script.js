let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

console.log(inputAdults)

function meatFP(duration) {
    if (duration >= 6) {
        return  650;
    } else {
        return  400;
    }
}

function beerFP(duration) {
    if (duration >= 6) {
        return  2000;
    } else {
        return 1200;
    }
}

function drinksFP(duration) {
    if (duration >= 6) {
        return  1500;
    } else {
        return  1000;
    }
}

function calculate() {
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;


    let amountOfMeat = meatFP(duration) * adults + (meatFP(duration) / 2 * kids); 
    let amountOfBeer = beerFP(duration) * adults;
    let amountOfDrinks = drinksFP(duration) * adults + (drinksFP(duration) / 2 * kids);


    result.innerHTML = `<p style="color: white;">${amountOfMeat / 1000} Kg de Carne</p>`
    result.innerHTML += `<p style="color: white;">${Math.ceil (amountOfBeer / 355)} Latas de Cerveja</p>`
    result.innerHTML += `<p style="color: white;">${Math.ceil (amountOfDrinks / 2000)} Pet's de 2L de Bebidas</p>`
}