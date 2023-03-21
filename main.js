"use strict"

// renderCoffee function is dynamically generating HTML divs with a class of coffee; creating a coffee div with the specified name and roast. //
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p>' + coffee.id + '</p>';
    html += '<p>' + coffee.name + '</p>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}



// Sorting Coffee by ID //
function renderCoffees(coffees) {
    coffees.sort(function(a, b) {
        return a.id -b.id;
    });

// Generating html of each coffee object using the renderCoffee function after being sorted //
    return coffees.map(function(coffee) {
        return renderCoffee(coffee);

    }).join('')

}

// Grabbing data from "Coffee Search Bar ID" //
let userInput = document.getElementById("CoffeeSearchBar")

//
function updateCoffees() {

    // selectRoast References type of roast selected //
    let selectedRoast = roastSelection.value;

    // typedInput is userInput's data turned into all CAPS //
    let typedInput = userInput.value.toLowerCase();

    // filtered coffees declares an empty array for search results to be put in //
    let filteredCoffees = [];

    // forEach is iterating through each coffee through coffees array //
    coffees.forEach(function (coffee) {

        // if statement is checking for roast type and coffee to matched with the userInput's results //
        if(coffee.roast === selectedRoast || selectedRoast === "all") {
            if(coffee.name.toUpperCase().includes(typedInput) && coffee.name.toLowerCase().includes(typedInput)) {

                // Once results are matched, the results are pushed/added to filteredCoffees's array //
                filteredCoffees.push(coffee);
            }
        }
    });

    // updates the HTML of the tbody element with the HTML generated by the renderCoffees function, using the filteredCoffees array as input.
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// IIFE is executed everytime user types in words and releases keyboard or selects an option from the select
userInput.addEventListener("input", updateCoffees);
roastSelection.addEventListener("change", updateCoffees);



function updateCoffees(e) {

    // Prevents refresh when form is submitted //
    e.preventDefault();

    // selectRoast References type of roast selected //
    var selectedRoast = roastSelection.value;

    // filtered coffees declares an empty array for search results to be put in //
    var filteredCoffees = [];

    // Checks coffee based on selected roast //
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {

            // Once roast is selected, all coffees with the selected roast will be pushed to filteredCoffees's array //
            filteredCoffees.push(coffee);
        }
    });

    // updates the HTML of the tbody element with the HTML generated by the renderCoffees function, using the filteredCoffees array as input //
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'CodeUp Special', roast: 'Light Roast'},
    {id: 2, name: 'The Morning Resurrection', roast: 'light'},
    {id: 3, name: 'Bean There, Done That', roast: 'light'},
    {id: 4, name: 'The Grind Father', roast: 'medium'},
    {id: 5, name: 'Espresso Yourself', roast: 'medium'},
    {id: 6, name: 'Better Latte Than Never', roast: 'medium'},
    {id: 7, name: 'Java the Hutt', roast: 'dark'},
    {id: 8, name: 'Sip Happens', roast: 'dark'},
    {id: 9, name: 'Joe Mama"s Java', roast: 'dark'},
    {id: 10, name: 'Death Before Decaf', roast: 'dark'},
    {id: 11, name: 'Brewed Awakening', roast: 'dark'},
    {id: 12, name: 'The Empire Roasts Back', roast: 'dark'},
    {id: 13, name: 'Bean Girls', roast: 'dark'},
    {id: 14, name: 'Roast Busters', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
