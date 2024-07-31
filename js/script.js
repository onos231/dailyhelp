function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var arrow = dropdown.previousElementSibling.querySelector('.arrow');
    
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        arrow.classList.remove('up');
    } else {
        // Close any open dropdowns
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(menu) {
            menu.style.display = 'none';
            menu.previousElementSibling.querySelector('.arrow').classList.remove('up');
        });
        
        // Open the selected dropdown
        dropdown.style.display = "block";
        arrow.classList.add('up');
    }
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(menu) {
            menu.style.display = 'none';
            menu.previousElementSibling.querySelector('.arrow').classList.remove('up');
        });
    }
}




// dob session
