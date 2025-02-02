 document.getElementById('removeBtn').addEventListener('click', function() {
            const colorSelect = document.getElementById('colorSelect');
            const selectedColor = colorSelect.value; // Get the selected color from the dropdown

            // Loop through the options in the dropdown and remove the selected one
            for (let i = 0; i < colorSelect.options.length; i++) {
                if (colorSelect.options[i].value === selectedColor) {
                    colorSelect.remove(i); // Remove the selected option
                    break; // Exit loop after removal
                }
            }