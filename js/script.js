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




// filter session

function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

function toggleSubFilter(subFilterId) {
    var subFilter = document.getElementById(subFilterId);
    subFilter.style.display = subFilter.style.display === "block" ? "none" : "block";
}
function toggleSubFilterTwo (subFilterId) {
    var subFilter = document.getElementById(subFilterId);
    subFilter.style.display = subFilter.style.display === "block" ? "none" : "block";
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.filterbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
