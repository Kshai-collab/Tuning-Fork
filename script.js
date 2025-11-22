// --- NAVBAR & MOBILE MENU ---
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(document.querySelector('.hero')) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
}

// --- COMPLETE MENU DATA WITH HALF/FULL PRICING ---
const menuItems = [
    // --- COMBOS (Single Price) ---
    { id: 101, name: "Mega Combo", price: 230, category: "combos", desc: "Chicken Biryani + Roasted Chicken + Omelette.", img: "https://images.unsplash.com/photo-1631515243349-e06036043944?w=500" },
    { id: 102, name: "Fry Combo", price: 220, category: "combos", desc: "Chicken Biryani + Chicken Fry + Omelette.", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500" },
    { id: 103, name: "Basic Combo", price: 190, category: "combos", desc: "Chicken Biryani + Chicken Fry.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=500" },
    { id: 104, name: "Roast Combo", price: 200, category: "combos", desc: "Chicken Biryani + Roasted Chicken.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
    { id: 105, name: "Curry Rice Combo", price: 160, category: "combos", desc: "Chicken Curry + Plain Rice.", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500" },

    // --- BIRYANI (Half & Full) ---
    { 
        id: 201, name: "Chicken Biryani", category: "biryani", desc: "Aromatic basmati rice with spiced chicken.", 
        variations: { half: 70, full: 130 },
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" 
    },
    { 
        id: 202, name: "Chicken Biryani (Gravy)", category: "biryani", desc: "Biryani served with extra masala gravy.", 
        variations: { half: 80, full: 140 },
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" 
    },
    { 
        id: 203, name: "Roasted Chix Biryani", category: "biryani", desc: "Special biryani with roasted chicken pieces.", 
        variations: { half: 100, full: 180 },
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" 
    },
    { 
        id: 204, name: "Egg Biryani", category: "biryani", desc: "Flavorful biryani with boiled eggs.", 
        variations: { half: 70, full: 130 },
        img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500" 
    },
    { 
        id: 205, name: "Veg Biryani", category: "biryani", desc: "Loaded with fresh vegetables and spices.", 
        variations: { half: 70, full: 130 },
        img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500" 
    },

    // --- RICE (Half & Full) ---
    { 
        id: 301, name: "Chicken Fried Rice", category: "biryani", desc: "Indo-Chinese style stir fried rice.", 
        variations: { half: 90, full: 160 },
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=500" 
    },
    { 
        id: 302, name: "Egg Chicken Rice", category: "biryani", desc: "Fried rice with egg and chicken.", 
        variations: { half: 110, full: 180 },
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=500" 
    },
    { 
        id: 303, name: "Egg Fried Rice", category: "biryani", desc: "Classic egg fried rice.", 
        variations: { half: 90, full: 150 },
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=500" 
    },
    { 
        id: 304, name: "Schezwan Chix Rice", category: "biryani", desc: "Spicy Schezwan chicken rice.", 
        variations: { half: 90, full: 150 },
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500" 
    },
    { 
        id: 305, name: "Plain Rice", category: "biryani", desc: "Steamed white rice.", 
        variations: { half: 60, full: 100 },
        img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=500" 
    },

    // --- CHICKEN STARTERS (Varied Prices) ---
    { 
        id: 401, name: "Roasted Tandoori", category: "chicken_starters", desc: "Marinated roasted chicken (Bone-in).", 
        variations: { half: 230, full: 400 }, // Skipping Quarter for UI simplicity
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500" 
    },
    { 
        id: 402, name: "Chicken Tikka", category: "chicken_starters", desc: "Boneless grilled chicken chunks.", 
        variations: { half: 140, full: 260 },
        img: "https://images.unsplash.com/photo-1599021406414-06758652431d?w=500" 
    },
    { 
        id: 403, name: "Chicken Lollipop", category: "chicken_starters", desc: "Fried chicken drumettes.", 
        variations: { half: 160, full: 290 },
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500" 
    },
    { 
        id: 404, name: "Chilli Chicken", category: "chicken_starters", desc: "Spicy chinese style chicken.", 
        variations: { half: 140, full: 250 },
        img: "https://images.unsplash.com/photo-1626804475297-411dbe6372eb?w=500" 
    },

    // --- CHICKEN CURRIES (Half & Full) ---
    { 
        id: 501, name: "Chicken Rara", category: "chicken_curries", desc: "Chef's special rich gravy.", 
        variations: { half: 370, full: 590 },
        img: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500" 
    },
    { 
        id: 502, name: "Matka Chicken", category: "chicken_curries", desc: "Pot cooked traditional curry.", 
        variations: { half: 390, full: 590 },
        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500" 
    },
    { 
        id: 503, name: "Butter Chicken", category: "chicken_curries", desc: "Creamy tomato butter sauce.", 
        variations: { half: 340, full: 530 },
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500" 
    },
    { 
        id: 504, name: "Kadhai Chicken", category: "chicken_curries", desc: "Spicy wok cooked chicken.", 
        variations: { half: 320, full: 520 },
        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500" 
    },
    { 
        id: 505, name: "Chicken Curry", category: "chicken_curries", desc: "Homestyle chicken gravy.", 
        variations: { half: 290, full: 480 },
        img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500" 
    },

    // --- VEG CURRIES (Half & Full) ---
    { 
        id: 601, name: "Paneer Tikka Masala", category: "veg_curries", desc: "Grilled paneer in spicy gravy.", 
        variations: { half: 180, full: 320 },
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" 
    },
    { 
        id: 602, name: "Kadhai Paneer", category: "veg_curries", desc: "Spicy paneer with bell peppers.", 
        variations: { half: 170, full: 300 },
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500" 
    },
    { 
        id: 603, name: "Shahi Paneer", category: "veg_curries", desc: "Sweet and creamy gravy.", 
        variations: { half: 160, full: 290 },
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" 
    },

    // --- ROLLS (Single Price) ---
    { id: 701, name: "Chicken Roll", price: 70, category: "rolls", desc: "Spiced chicken filling.", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500" },
    { id: 702, name: "Double Chicken Roll", price: 90, category: "rolls", desc: "Extra chicken filling.", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500" },
    { id: 703, name: "Paneer Roll", price: 70, category: "rolls", desc: "Cottage cheese filling.", img: "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500" },

    // --- BREADS (Single Price) ---
    { id: 801, name: "Tandoori Roti", price: 15, category: "breads", desc: "Clay oven bread.", img: "https://images.unsplash.com/photo-1573165245368-80e9273c5240?w=500" },
    { id: 802, name: "Butter Naan", price: 30, category: "breads", desc: "Butter topped naan.", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500" },
    { id: 803, name: "Garlic Naan", price: 40, category: "breads", desc: "Garlic infused naan.", img: "https://images.unsplash.com/photo-1573165245368-80e9273c5240?w=500" }
];

// --- SELECTORS ---
const menuGrid = document.getElementById('menu-grid');
const cartItemsEl = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal-price');
const taxEl = document.getElementById('tax-price');
const totalEl = document.getElementById('total-price');
const cartCountEl = document.getElementById('cart-count');

// --- CART INITIALIZATION ---
let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCartCount();

// --- MENU RENDERING ---
if (menuGrid) {
    displayMenu(menuItems);
    
    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const category = e.currentTarget.dataset.category;
            const menuCategory = menuItems.filter((item) => {
                if(category === "all") return true;
                return item.category === category;
            });
            displayMenu(menuCategory);
        });
    });
}

function displayMenu(items) {
    if (!menuGrid) return;
    
    let displayMenu = items.map((item) => {
        let priceSection;
        let controlSection;

        // Check if item has variations (Half/Full) or Single Price
        if (item.variations) {
            // Default to 'full' price for display, but show selector
            priceSection = `<span class="price" id="price-${item.id}">${item.variations.full}</span>`;
            
            controlSection = `
                <select class="size-select" id="size-${item.id}" onchange="updateCardPrice(${item.id})">
                    <option value="full">Full - ${item.variations.full}</option>
                    <option value="half">Half - ${item.variations.half}</option>
                </select>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fa-solid fa-basket-shopping"></i> Add to Cart
                </button>
            `;
        } else {
            // Single Price Item
            priceSection = `<span class="price">${item.price}</span>`;
            controlSection = `
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fa-solid fa-basket-shopping"></i> Add to Cart
                </button>
            `;
        }

        return `
            <article class="food-card">
                <div class="card-image"><img src="${item.img}" alt="${item.name}"></div>
                <div class="card-details">
                    <div class="card-header">
                        <span class="name">${item.name}</span>
                        ${priceSection}
                    </div>
                    <p class="description">${item.desc}</p>
                    ${controlSection}
                </div>
            </article>
        `;
    }).join("");
    
    menuGrid.innerHTML = displayMenu;
}

// Function to update price displayed on card when dropdown changes
function updateCardPrice(id) {
    const item = menuItems.find(p => p.id === id);
    const select = document.getElementById(`size-${id}`);
    const priceSpan = document.getElementById(`price-${id}`);
    
    if(item && select && priceSpan) {
        priceSpan.innerText = item.variations[select.value];
    }
}

// --- CART LOGIC ---

function addToCart(id) {
    const item = menuItems.find((product) => product.id === id);
    let selectedSize = 'standard'; // default for single price items
    let selectedPrice = item.price;
    let displayName = item.name;

    // Check if variations exist and get selected value
    const sizeSelect = document.getElementById(`size-${id}`);
    if (sizeSelect) {
        selectedSize = sizeSelect.value;
        selectedPrice = item.variations[selectedSize];
        // Capitalize size for display
        const sizeLabel = selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1);
        displayName = `${item.name} (${sizeLabel})`;
    }

    // Create a unique Cart ID based on Item ID + Size (e.g., "101-half")
    const cartItemId = `${id}-${selectedSize}`;

    // Check if THIS specific variation is already in cart
    if (cart.some((item) => item.cartId === cartItemId)) {
        changeNumberOfUnits("plus", cartItemId);
    } else {
        cart.push({
            ...item,
            cartId: cartItemId, // Unique ID for Cart Logic
            name: displayName,
            price: selectedPrice,
            numberOfUnits: 1
        });
    }

    updateCart();
    
    // Optional: Visual feedback
    alert(`${displayName} added to cart!`);
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
    localStorage.setItem('CART', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    if(cartCountEl) {
        let count = 0;
        cart.forEach(item => count += item.numberOfUnits);
        cartCountEl.innerText = count;
    }
}

function renderCartItems() {
    if (!cartItemsEl) return;
    
    cartItemsEl.innerHTML = "";
    
    if(cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-plate-wheat"></i>
                <h2>Your cart is empty</h2>
                <p>Go back to the menu and pick something delicious!</p>
            </div>`;
        return;
    }

    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" class="item-img">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <div class="item-price">${item.price}</div>
                    <div class="unit-controls">
                        <div onclick="changeNumberOfUnits('minus', '${item.cartId}')">-</div>
                        <div class="units">${item.numberOfUnits}</div>
                        <div onclick="changeNumberOfUnits('plus', '${item.cartId}')">+</div>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeItem('${item.cartId}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });
}

// Note: ID param here is now the string cartId (e.g. "101-half")
function changeNumberOfUnits(action, cartId) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.cartId === cartId) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < 10) {
                numberOfUnits++;
            }
        }
        return { ...item, numberOfUnits };
    });
    updateCart();
}

function removeItem(cartId) {
    cart = cart.filter((item) => item.cartId !== cartId);
    updateCart();
}

function renderSubtotal() {
    if(!subtotalEl) return;

    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
    });

    const tax = totalPrice * 0.05; // 5% GST for restaurants
    const grandTotal = totalPrice + tax;

    subtotalEl.innerHTML = `${totalPrice.toFixed(2)}`;
    taxEl.innerHTML = `${tax.toFixed(2)}`;
    totalEl.innerHTML = `${grandTotal.toFixed(2)}`;
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    // Logic to send order to WhatsApp or Backend would go here
    const orderText = cart.map(item => `${item.name} x${item.numberOfUnits}`).join(', ');
    alert(`Order Placed: ${orderText}`);
    
    cart = [];
    updateCart();
}

// Initialize on load
if(cartItemsEl) updateCart();
