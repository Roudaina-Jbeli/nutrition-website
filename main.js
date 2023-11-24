var navbar = document.querySelector(".header.navbar");
var menu = document.querySelector("#menu");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
};

$(document).ready(function () {
	$(".buttons").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var filter = $(this).attr("data-filter");
		if (filter == "all") {
			$(".diet .box").show(400);
		} else {
			$(".diet .box")
				.not("." + filter)
				.hide(200);
			$(".diet .box")
				.filter("." + filter)
				.show(400);
		}
	});
});



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
console.log("Script loaded.");



document.addEventListener("DOMContentLoaded", function () {
    // Add to Cart buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each Add to Cart button
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemName = button.getAttribute('data-item-name');
            var itemPrice = parseFloat(button.getAttribute('data-item-price'));
            var itemImage = button.parentElement.querySelector('img').src;

            // Add the item to the cart in local storage
            addToCart(itemName, itemPrice, itemImage);

            // Display success message or trigger modal here if needed
            alert(itemName + ' added to cart!');
        });
    });

     // Shopping cart icon
     var shoppingCartIcon = document.querySelector('.icons'); // Assuming the class is 'icons'

     // Click event listener for the shopping cart icon
     shoppingCartIcon.addEventListener('click', function () {
         // Retrieve cart items from local storage
         var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
 
         // Display cart items in the modal
         displayCartItems(cartItems);
     });

    // Close modal button
    var closeModal = document.querySelector('.close');

    closeModal.addEventListener('click', function () {
        document.getElementById('cartModal').style.display = 'none';
    });

    // Function to add an item to the cart in local storage
    function addToCart(itemName, itemPrice, itemImage) {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        var newItem = { name: itemName, price: itemPrice, image: itemImage };
        cartItems.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Function to display cart items in a modal (you can customize this part)
    function displayCartItems(cartItems) {
        var modal = document.getElementById('cartModal');
        var cartItemsDiv = document.getElementById('cartItems');

        // Clear previous cart items
        cartItemsDiv.innerHTML = '';

       // Loop through cart items and create elements for each
cartItems.forEach(function (item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    var imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;
    imageElement.classList.add('cart-item-image');

    var nameElement = document.createElement('p');
    nameElement.textContent = item.name;
    nameElement.classList.add('cart-item-name');

    var priceElement = document.createElement('p');
    priceElement.textContent = `$${item.price.toFixed(2)}`;
    priceElement.classList.add('cart-item-price');

    itemElement.appendChild(imageElement);
    itemElement.appendChild(nameElement);
    itemElement.appendChild(priceElement);

    cartItemsDiv.appendChild(itemElement);
});


        // Display the modal
        modal.style.display = 'block';
    }
});

function register() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var imageUrl = document.getElementById('imageUrl').value;

    // Retrieve existing users from local storage or create an empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    var existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already registered. Please use a different email.');
        return;
    }

    // Create a new user object
    var newUser = {
        username: username,
        email: email,
        password: password,
        imageUrl: imageUrl
    };

    // Add the new user to the array
    users.push(newUser);

    // Update the local storage with the updated users array
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
}

function login() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the provided email
    var loginUser = users.find(user => user.email === loginEmail);

    // Check if the user exists and the password is correct
    if (loginUser && loginUser.password === loginPassword) {
        // Set current user in local storage
        localStorage.setItem('currentUser', JSON.stringify(loginUser));

        // Update visibility of elements
        document.getElementById('main').style.display = 'block';
        document.getElementById('auth-container').style.display = 'none';

        // Call the function to set the custom image
        setCustomImage();

        // You can add additional logic or UI updates here
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Function to set the custom image
function setCustomImage() {
    // Get the custom image source from localStorage
    var customUserString = localStorage.getItem('currentUser');

    // Parse the string back into an object
    var customUser = customUserString ? JSON.parse(customUserString) : null;

    // Log the object to the console for debugging
    console.log('Custom User Object:', customUser);

    if (customUser && customUser.imageUrl) {
        // Set the source for the custom image
        var customImg = document.getElementById('customImg');

        // Log the element to the console for debugging
        console.log('Custom Image Element:', customImg);

        // Set the source for the custom image
        customImg.src = customUser.imageUrl;
    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

// Call the setCustomImage function when the DOM is loaded
document.addEventListener('DOMContentLoaded', setCustomImage);


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

