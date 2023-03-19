(function () {
    "use strict";

// Concatenation
    function renderCoffee(coffee) {
        return `
    <div class="coffee">
      <p>${coffee.name}</p>
      <p>${coffee.roast}</p>
    </div>
  `;
    }



// Displaying All Coffee
function renderCoffees(coffees) {
   let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}




// Updating new coffee into array
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        console.log(coffee.roast)
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    })
}
// Array
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// Code to search for specified coffee. Pulling in from search bar. //
let userInput = document.getElementById('CoffeeSearchBar')
userInput.addEventListener("keyup", function () {

    let typedInput = userInput.value.toUpperCase();
    let filteredCoffees = [];
    for(let i = 0; i < coffees.length; i++){
        if(coffees[i].name.toUpperCase().includes(typedInput)){
            filteredCoffees.push(coffees[i]);
        }
    }
tbody.innerHTML = renderCoffees(filteredCoffees);
})

// Getting Users Input From...
let userInput1 = document.getElementById('addCoffee') // text entry name
let userInput2 = document.getElementById('add-coffee') // dropdown roast
console.log(userInput2);

// userInput1.push(coffees)

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let submitButton1 = document.querySelector('#submit1');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

//coffeeID = 15;


submitButton1.addEventListener("click" , addCoffee);
userInput1.addEventListener('change' , addCoffee);


// creating an object from user input, to add to update coffee to add into coffee array.
function addCoffee(){

    let coffeeName = userInput1.value;
    let coffeeRoast = userInput2.value;
    let coffee = {name: coffeeName, roast: coffeeRoast}
    coffees.push(coffee)
    console.log(coffee);
    // userInput1.addEventListener('change' , addCoffee);

}

    var iffeVar = "I'm local to the IIFE.";
})();

alert(iffeVar); // undefined