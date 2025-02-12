document.addEventListener('DOMContentLoaded', function() {
    var removeButton = document.getElementById('removeButton');
    var colorSelect = document.getElementById('colorSelect');

    if (removeButton && colorSelect) {
        removeButton.addEventListener('click', function() {
            colorSelect.remove(colorSelect.selectedIndex);
        });
    }
});
