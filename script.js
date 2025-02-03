let dropdown = document.getElementById('colorSelect');
let button = document.getElementById('removeBtn');

// Add event listener to the button
button.addEventListener('click', function() {
    // Get the selected option
    let selectedOption = dropdown.options[dropdown.selectedIndex];

    // Remove the selected option
    dropdown.remove(selectedOption.index);
});