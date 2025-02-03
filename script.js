let dropdown = document.getElementById('colorSelect');
let button = document.getElementById('removeBtn');

console.log('Dropdown:', dropdown); // This should log the dropdown element
console.log('Button:', button); // This should log the button element

// Add event listener to the button
button.addEventListener('click', function() {
    // Get the selected option
    let selectedOption = dropdown.options[dropdown.selectedIndex];

    console.log('Selected option:', selectedOption); // This should log the selected option

    // Remove the selected option
    dropdown.remove(selectedOption.index);
});