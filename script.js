// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Animate Links (Optional fade in)
    const links = document.querySelectorAll('.nav-links li');
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Add animation for nav links in CSS (insert this into style.css if you want the fade effect)
/* 
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}
*/
// ... (Keep the Navbar & Mobile Menu code at the top) ...

// --- DATA & CART LOGIC ---

const menuItems = [
    { id: 1, name: "Truffle Pasta", price: 18.00, category: "mains", desc: "Handmade fettuccine with black truffle cream sauce.", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Wagyu Burger", price: 24.00, category: "mains", desc: "Premium wagyu beef, aged cheddar, and caramelized onions.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Caesar Salad", price: 12.00, category: "starters", desc: "Crisp romaine, parmesan crisp, and house-made dressing.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Molten Lava Cake", price: 10.00, category: "desserts", desc: "Rich dark chocolate cake with a gooey center.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "Spicy Wings", price: 14.00, category: "starters", desc: "Crispy chicken wings tossed in our signature hot sauce.", img: "https://images.unsplash.com/photo-1608039829575-403424a6957a?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Mojito", price: 8.00, category: "drinks", desc: "Classic mint and lime cocktail, refreshing and cool.", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Grilled Salmon", price: 22.00, category: "mains", desc: "Fresh atlantic salmon with asparagus and lemon butter.", img: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Berry Cheesecake", price: 9.00, category: "desserts", desc: "New York style cheesecake topped with fresh berries.", img: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=500&q=60" }
];

// Selectors
const menuGrid = document.getElementById('menu-grid');
const cartItemsEl = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal-price');
const taxEl = document.getElementById('tax-price');
const totalEl = document.getElementById('total-price');
const cartCountEl = document.getElementById('cart-count');

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCartCount();

// --- MENU PAGE LOGIC ---
if (menuGrid) {
    displayMenu(menuItems);
    
    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const category = e.currentTarget.dataset.category;
            const menuCategory = menuItems.filter((menuItem) => menuItem.category === category);
            displayMenu(category === "all" ? menuItems : menuCategory);
        });
    });
}

function displayMenu(items) {
    let displayMenu = items.map((item) => {
        return `
            <article class="food-card">
                <div class="card-image"><img src="${item.img}" alt="${item.name}"></div>
                <div class="card-details">
                    <div class="card-header"><span class="name">${item.name}</span><span class="price">$${item.price.toFixed(2)}</span></div>
                    <p class="description">${item.desc}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})"><i class="fa-solid fa-basket-shopping"></i> Add to Cart</button>
                </div>
            </article>
        `;
    }).join("");
    menuGrid.innerHTML = displayMenu;
}

// --- CART LOGIC ---

function addToCart(id) {
    // Check if item already exists
    if(cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = menuItems.find((product) => product.id === id);
        cart.push({ ...item, numberOfUnits: 1 });
    }
    updateCart();
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
    if (!cartItemsEl) return; // Only run on Cart page

    cartItemsEl.innerHTML = ""; // Clear items
    
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
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="unit-controls">
                        <div onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="units">${item.numberOfUnits}</div>
                        <div onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });
}

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
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

function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

function renderSubtotal() {
    if(!subtotalEl) return;

    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    const tax = totalPrice * 0.1; // 10% Tax
    const shipping = totalPrice > 0 ? 5 : 0; // $5 shipping unless cart is empty
    const grandTotal = totalPrice + tax + shipping;

    subtotalEl.innerHTML = `$${totalPrice.toFixed(2)}`;
    taxEl.innerHTML = `$${tax.toFixed(2)}`;
    totalEl.innerHTML = `$${grandTotal.toFixed(2)}`;
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    // In a real app, this would redirect to a payment gateway
    alert("Order Placed Successfully! Bon Appétit!");
    cart = [];
    updateCart();
}

// Run render on page load if on cart page
if(cartItemsEl) {
    updateCart();
}
// --- SPECIAL ORDERS FORM HANDLING ---

const specialForm = document.getElementById('special-order-form');
const modal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

if (specialForm) {
    specialForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission

        // In a real backend, you would send the data here.
        // For now, we simulate a success message.
        
        // Show Modal
        modal.style.display = "flex";
        
        // Clear Form
        specialForm.reset();
    });
}

// Close Modal Actions
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

// Close modal if clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
