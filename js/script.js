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



