// Hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.right === '0px') {
        menu.style.right = '-250px';
    } else {
        menu.style.right = '0px';
    }
});
		document.getElementById('close-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.right = '-250px';
});
		document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');
    
    // Check if the click happened outside the menu and hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.style.right = '-250px';
    }
});

// slide container

let slideIndex = 0;
showSlides();

function showSlides() {
	'use strict'
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 12000); // Change image every 4 seconds
}

// dropdown

function toggleDropdownMenu() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var arrow = document.querySelector('.dropdown-toggle .arrow');
    
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
        arrow.innerHTML = '&#9662;';
    } else {
        dropdownMenu.style.display = 'block';
        arrow.innerHTML = '&#9652;';
    }
}

function selectState(state) {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var button = document.querySelector('.dropdown-toggle');
    var arrow = document.querySelector('.dropdown-toggle .arrow');
    
    button.innerHTML = '' + state + ' <span class="arrow">&#9662;</span>';
    dropdownMenu.style.display = 'none';
    arrow.innerHTML = '&#9662;';
}

function selectExperience(Years) {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var button = document.querySelector('.dropdown-toggle');
    var arrow = document.querySelector('.dropdown-toggle .arrow');
    
    button.innerHTML = '' + Years + ' <span class="arrow">&#9662;</span>';
    dropdownMenu.style.display = 'none';
    arrow.innerHTML = '&#9662;';
	
}

// Opening hours
function toggleTab() {
    var tabContent = document.querySelector('.tab-content');
    var arrow = document.querySelector('.tab-toggle .arrow');
    
    if (tabContent.style.display === 'block') {
        tabContent.style.display = 'none';
        arrow.innerHTML = '&#9662;';
    } else {
        tabContent.style.display = 'block';
        arrow.innerHTML = '&#9652;';
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


// Upload picture

document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById("avatar");
    const fileInput = document.getElementById("fileInput");

    avatar.addEventListener("click", function() {
        fileInput.click();
    });

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

// sex and dob session
document.addEventListener("DOMContentLoaded", function() {
    const dobInput = document.getElementById("dob");
    const hiddenDateInput = document.getElementById("hiddenDateInput");
    const calendarIcon = document.querySelector(".calendar-icon");

    dobInput.addEventListener("click", function() {
        hiddenDateInput.click();
    });

    calendarIcon.addEventListener("click", function() {
        hiddenDateInput.click();
    });

    hiddenDateInput.addEventListener("change", function() {
        const date = new Date(this.value);
        const formattedDate = date.toLocaleDateString();
        dobInput.value = formattedDate;
    });
});

// Bitcoin session
const amountInUSD = 1000;
        const amountInBTC = 0.025;
        let displayInUSD = true;

        function toggleAmount() {
            displayInUSD = !displayInUSD;
            document.getElementById('amount').innerText = displayInUSD ? `${amountInUSD} USD` : `${amountInBTC} BTC`;
            document.querySelector('.toggle-button').innerText = displayInUSD ? 'Switch to BTC' : 'Switch to USD';
        }

        function copyBitcoinAddress() {
            const bitcoinAddress = document.getElementById('bitcoinAddress').innerText;
            navigator.clipboard.writeText(bitcoinAddress).then(() => {
                alert('Bitcoin address copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
function copyBankAddress() {
            const bankAddress = document.getElementById('bankAddress').innerText;
            navigator.clipboard.writeText(bankAddress).then(() => {
                alert('Bank address copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
// FAQ session

function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
    } else {
        answer.style.display = 'block';
        icon.textContent = '-';
    }
}

// Search bar session

document.getElementById('search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    var searchIcon = document.getElementById('search-icon');
    
    // Hide the initial search icon
    searchIcon.style.display = 'none';
    
    // Display the search bar
    searchBar.style.display = 'flex';
});

// payment options

	function openContent(event, contentId) {
    // Hide all tab content by default
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName('tab-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Show the current tab content and add an active class to the clicked tab
    document.getElementById(contentId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// By default, open the first tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});

// Toggle switch

document.getElementById('toggle-switch').addEventListener('change', function() {
    const statusText = document.getElementById('status-text');
    if (this.checked) {
        statusText.textContent = 'On';
    } else {
        statusText.textContent = 'Off';
    }
});