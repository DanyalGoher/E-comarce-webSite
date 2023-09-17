const myBagBtn = document.getElementById("my-bag-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const closeCartBtn = document.getElementById("close-cart-btn");

// Listen for click event on My Bag button
myBagBtn.addEventListener("click", () => {
  // Toggle the "open" class on the cart sidebar to show/hide it
  cartSidebar.classList.toggle("open");
});

// Listen for click event on close button
closeCartBtn.addEventListener("click", () => {
  // Remove the "open" class from the cart sidebar to close it
  cartSidebar.classList.remove("open");
});

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Create a new list item for the cart
  const li = document.createElement("li");
  li.innerHTML = `${itemName} - $${itemPrice}`;
  
  // Add the new item to the cart
  cartItems.appendChild(li);
}

