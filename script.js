document.addEventListener('DOMContentLoaded', function () {
  // Get the cart button and pop-up box by their IDs
  const cartButton = document.getElementById('cartButton');
  const cartPopup = document.getElementById('cartPopup');
  const cartTotal = document.getElementById('cartTotal');
  cartPopup.style.display = 'none';


  // Add a click event listener to the cart button
  cartButton.addEventListener('click', function () {
    // Toggle the visibility of the cart pop-up box
    if (cartPopup.style.display === 'block') {
      cartPopup.style.display = 'none'; // Hide the pop-up if it's visible
    } else {
      cartPopup.style.display = 'block'; // Show the pop-up if it's hidden

      // Calculate and set the position of the pop-up box relative to the cart button
      const cartButtonRect = cartButton.getBoundingClientRect();
      cartPopup.style.top = cartButtonRect.bottom + window.scrollY + 'px';
      cartPopup.style.left = cartButtonRect.right - cartPopup.offsetWidth + 'px';
    }
  });
  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', function() {
    window.location.href = 'checkout.html'; // Redirect to checkout.html
  });

  const closeButton = document.getElementById('closeButton');

  // Add an event listener to close the cart popup when the close button is clicked
  closeButton.addEventListener('click', function() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = 'none';
  });
  const products = [
    { name: "Air Jordan 4 Craft (Olive)", price: 7200 },
    { name: "Air Force 1 '07 (Burgundy Crush)", price: 3800 },
    { name: "Air Max 1 '87 (White and Photon Dust)", price: 4900 },
    { name: "Terminator (Sesame and Coconut Milk)", price: 3600 },
    { name: "Zoom Vomero 5 (Velvet Brown and Medium Ash)", price: 4900 },
    { name: "Air Max 1 (Vast Grey and Pearl White)", price: 4900 },
    { name: "Air Jordan 5 x A Ma Maniére (Dawn)", price: 8100 },
    { name: "Cortez (Sail and Stadium Green)", price: 3600 },
    { name: "Air Jordan 3 (Fear)", price: 7200 },
    { name: "NOCTA Air Force 1 (White)", price: 5800 },
    { name: "ISPA MindBody (Black and Anthracite)", price: 5800 },
    { name: "Air Jordan 2 (Fire Red)", price: 6300 },
    { name: "Zoom Vomero 5 (Black and Picante Red)", price: 4500 },
    { name: "Air Force 1 Retro \"Color of the Month\" (White)", price: 4000 },
    { name: "Terminator (Phantom and Black)", price: 3800 },
    { name: "Air Humara (Deep Royal Blue and Light Ultramarine)", price: 5400 },
    { name: "Air Force 1 (Chocolate)", price: 4900 },
    { name: "Air Jordan 3 (Off Noir)", price: 7200 },
    { name: "Air Max 1 '86 (Blue Grey and Black)", price: 5400 },
    { name: "Air Jordan 13 (Wheat)", price: 6700 },
    { name: "Air Penny 2 (Atlantic Blue)", price: 6300 },
    { name: "Air Jordan 11 (Gratitude)", price: 7600 },
    { name: "Magmascape x sacai (Varsity Royal)", price: 7600 },
    { name: "Air Foamposite One (Black)", price: 7900 },
    { name: "Air Force 1 (Color of the Month)", price: 6700 },
    { name: "Air Force 1 GTX (Gum Light Brown)", price: 4900 },
    { name: "Air Force 1 Shadow (Pearl Black)", price: 4000 },
    { name: "Air Force 1 LV 8 (Multi-Color Velcro)", price: 3100 },
    { name: "Air Force 1 '07 EasyOn (White)", price: 3600 },
    { name: "Air Force 1 LV 8 (Night Maroon)", price: 3600 },
    { name: "Air Force 1 LV 8 (Midnight Navy)", price: 3600 },
    { name: "Air Force 1 '07 LX (Panelled White)", price: 4000 },
    { name: "Air Force 1 Premium (Pearl Pink)", price: 4000 },
    { name: "Dunk SE Low (White)", price: 3600 },
    { name: "Dunk Retro Low (Panda)", price: 3400 },
    { name: "Dunk Retro Premium Low (Deep Jungle Silver White)", price: 3600 },
    { name: "Dunk Twist Low (Dark Obsidian)", price: 3800 },
    { name: "Dunk Retro SE High (Baroque Brown)", price: 4000 },
    { name: "Dunk LX Low (Black Summit White)", price: 4300 },
    { name: "SB Dunk Pro High (Amarillo Orange Yellow White)", price: 4000 },
    { name: "Air Max Pulse Roam (Iron Grey)", price: 5400 },
    { name: "Air Max 90 Futura (Red Stardust)", price: 4500 },
    { name: "Air Max 1 LX (Rugged Orange)", price: 4900 },
    { name: "Air Max 270 (Metalllic Silver)", price: 4000 },
    { name: "Air Max 97 (Wolf Grey)", price: 5400 },
    { name: "Air Max 97 SE (Medium Ash Bronzine)", price: 5400 },
    { name: "Air Max 97 OG (Metallic Gold)", price: 5800 },
    { name: "Air Max 95 By You (Silvery Red)", price: 7800 },
    { name: "Blazer '77 Vintage Mid (White Black)", price: 3600 },
    { name: "Blazer Low '77 Jumbo (Gum Medium Brown Pro Green)", price: 3100 }
  ];
  const cartItems = []; // Array to hold cart items
  

  // Function to display products in the HTML
  function displayProducts(products) {
    const productList = document.getElementById('product-list');

    products.forEach((product, index) => {
      const listItem = document.createElement('li');

      const image = document.createElement('img');
      image.src = `image/image${index + 1}.jpg`; 
      image.alt = product.name;
      listItem.appendChild(image);

      const productName = document.createElement('h3');
      productName.textContent = product.name;
      listItem.appendChild(productName);

      const productPrice = document.createElement('p');
      productPrice.textContent = ` $${product.price.toFixed()}`;
      listItem.appendChild(productPrice);

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => {
        addToCart(product.name, product.price.toFixed());
      });
      listItem.appendChild(addToCartButton);

      productList.appendChild(listItem);
    });
  }
  function addToCart(productName, productPrice) {
    const product = { name: productName, price: parseFloat(productPrice) }; // Create product object
    cartItems.push(product);
    updateCartDisplay(); 
  }
  function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ''; 
    let totalPrice = 0;
    cartItems.forEach(item => {
      const cartItem = document.createElement('li');

      const image = document.createElement('img');
      const imageNumber = products.findIndex(product => product.name === item.name) + 1;
      image.src = `image/image${imageNumber}.jpg`; 
      image.alt = item.name;
      cartItem.appendChild(image);

      const itemName = document.createElement('h4');
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${item.price.toFixed()}`;
      cartItem.appendChild(itemPrice);

      cartItemsList.appendChild(cartItem);
      totalPrice += item.price;
    });
    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = `Total: $${totalPrice.toFixed()}`;
  }
  window.onload = function () {
    displayProducts(products);
  };

});

