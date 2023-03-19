// Updated Version of Coffee Project JS //

/* This version of the code uses the map method to apply the renderCoffee function to each element of the coffees array, and then uses the reverse method to reverse the order of the elements. Finally, the join method is used to concatenate all the elements of the array into a single string. This is more efficient and concise than the original version of the code. */

function renderCoffees(coffees) {
    return coffees
        .map(renderCoffee)
        .reverse()
        .join('');
}

/* This version of the code uses the filter method to create an array of coffee objects with the specified roast type. This is more efficient and concise than the original version of the code, which used a forEach loop to manually push elements to a new array. */

function updateCoffees(e) {
    e.preventDefault();

    let selectedRoast = roastSelection.value;
    let filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


/* This version of the code uses the filter method to create an array of coffee objects whose names contain the search string. This is more efficient and concise than the original version of the code, which used a for loop to manually push elements to a new array. */

let userInput = document.getElementById('CoffeeSearchBar');
userInput.addEventListener("keyup", function() {
    let typedInput = userInput.value.toUpperCase();
    let filteredCoffees = coffees.filter(coffee => coffee.name.toUpperCase().includes(typedInput));
    tbody.innerHTML = renderCoffees(filteredCoffees);
});


/* This version of the code uses separate variables to store references to the two elements with the specified id attributes. This makes it easier to work with the elements later on in the code. */

let userInput1 = document.getElementById('addCoffee'); // text entry name
let userInput2 = document.getElementById('add-coffee'); // dropdown roast
console.log(userInput1, userInput2);
