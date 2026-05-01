// ===== DATA =====
const restaurants = [
  {
    id: 1,
    name: "Chicken Republic",
    emoji: "🍗",
    category: "chicken",
    rating: 4.8,
    time: "20–35 min",
    deliveryFee: "₦500",
    minOrder: "₦1,500",
    description: "Nigeria's favourite chicken restaurant. Crispy, juicy, and always satisfying.",
    badge: "Popular",
    tags: ["Chicken", "Burgers", "Sides"],
    bgColor: "#fff4e6",
    menu: [
      { id: "cr1", name: "Mega Chicken Burger", price: 3500, emoji: "🍔", desc: "Crispy chicken fillet, lettuce, tomato, special sauce" },
      { id: "cr2", name: "2-Piece Chicken + Chips", price: 3200, emoji: "🍗", desc: "2 pieces fried chicken with seasoned chips" },
      { id: "cr3", name: "Chicken Republic Meal Deal", price: 4500, emoji: "🥡", desc: "2 pcs chicken, chips, coleslaw & drink" },
      { id: "cr4", name: "Peppered Gizzard", price: 1800, emoji: "🌶️", desc: "Spicy peppered gizzard, a Nigerian classic" },
      { id: "cr5", name: "Kids Meal (Chicken + Juice)", price: 2200, emoji: "🧒", desc: "1 pc chicken, small chips, juice box" },
      { id: "cr6", name: "Chicken Wrap", price: 2800, emoji: "🌯", desc: "Tortilla wrap with crispy chicken strips and veggies" },
    ]
  },
  {
    id: 2,
    name: "Item 7",
    emoji: "🍲",
    category: "local",
    rating: 4.7,
    time: "25–40 min",
    deliveryFee: "₦400",
    minOrder: "₦2,000",
    description: "Authentic Nigerian local dishes. Taste of home delivered to your doorstep.",
    badge: "Fan Favourite",
    tags: ["Nigerian", "Local", "Rice", "Soup"],
    bgColor: "#e8f5e9",
    menu: [
      { id: "i71", name: "Jollof Rice + Chicken", price: 2500, emoji: "🍚", desc: "Party-style Jollof rice with grilled chicken" },
      { id: "i72", name: "Egusi Soup + Eba", price: 2200, emoji: "🥣", desc: "Rich egusi soup with assorted meat and eba" },
      { id: "i73", name: "Pepper Soup (Goat)", price: 3000, emoji: "🌶️", desc: "Spicy goat meat pepper soup with utazi leaves" },
      { id: "i74", name: "Fried Rice + Plantain + Fish", price: 3200, emoji: "🐟", desc: "Nigerian fried rice, ripe plantain, and fried fish" },
      { id: "i75", name: "Pounded Yam + Ofe Onugbu", price: 2800, emoji: "🍠", desc: "Smooth pounded yam with bitter leaf soup" },
      { id: "i76", name: "Moi Moi + Ogi", price: 1200, emoji: "🫕", desc: "Steamed bean pudding with pap, breakfast special" },
    ]
  },
  {
    id: 3,
    name: "Dominion Pizza",
    emoji: "🍕",
    category: "pizza",
    rating: 4.6,
    time: "30–45 min",
    deliveryFee: "₦600",
    minOrder: "₦3,000",
    description: "Artisan pizzas and premium shawarmas crafted with love and the finest ingredients.",
    badge: "Top Rated",
    tags: ["Pizza", "Shawarma", "Fast Food"],
    bgColor: "#fce4ec",
    menu: [
      { id: "dp1", name: "Pepperoni Pizza (Large)", price: 7500, emoji: "🍕", desc: "Classic pepperoni on rich tomato base, 12\"" },
      { id: "dp2", name: "BBQ Chicken Pizza (Large)", price: 7800, emoji: "🍗", desc: "BBQ sauce, grilled chicken, red onions, peppers" },
      { id: "dp3", name: "Chicken Shawarma", price: 3500, emoji: "🌯", desc: "Juicy chicken, garlic sauce, veggies in warm pita" },
      { id: "dp4", name: "Beef Shawarma", price: 4000, emoji: "🥙", desc: "Spiced beef strips, special sauce, pickled veggies" },
      { id: "dp5", name: "Veggie Pizza (Medium)", price: 5500, emoji: "🥬", desc: "Fresh bell peppers, mushrooms, olives, mozzarella" },
      { id: "dp6", name: "Pizza + Shawarma Combo", price: 9500, emoji: "🎁", desc: "1 medium pizza + 1 chicken shawarma special deal" },
    ]
  },
  {
    id: 4,
    name: "Mr. Biggs",
    emoji: "🥧",
    category: "fast-food",
    rating: 4.5,
    time: "15–30 min",
    deliveryFee: "₦350",
    minOrder: "₦1,000",
    description: "A Nigerian fast food legend since 1983. Classic bites that never go out of style.",
    badge: "Classic",
    tags: ["Pies", "Snacks", "Fast Food", "Pastry"],
    bgColor: "#e3f2fd",
    menu: [
      { id: "mb1", name: "Meat Pie", price: 700, emoji: "🥧", desc: "Classic baked meat pie, warm and delicious" },
      { id: "mb2", name: "Chicken Pie", price: 750, emoji: "🥧", desc: "Tender chicken filling in flaky pastry" },
      { id: "mb3", name: "Fish Roll", price: 600, emoji: "🎣", desc: "Seasoned fish in a crispy fried roll" },
      { id: "mb4", name: "Meat Pie + Juice Combo", price: 1200, emoji: "🥤", desc: "2 meat pies plus your choice of chilled juice" },
      { id: "mb5", name: "Puff Puff (6 pieces)", price: 800, emoji: "🍩", desc: "Soft, fluffy deep-fried dough balls" },
      { id: "mb6", name: "Sausage Roll", price: 650, emoji: "🌭", desc: "Herbed sausage wrapped in golden puff pastry" },
    ]
  },
  {
    id: 5,
    name: "Tantalizer",
    emoji: "🍔",
    category: "fast-food",
    rating: 4.4,
    time: "20–35 min",
    deliveryFee: "₦450",
    minOrder: "₦1,500",
    description: "Tantalizing Nigerian fast food — burgers, grills, and local flavours you love.",
    badge: null,
    tags: ["Burgers", "Grills", "Nigerian"],
    bgColor: "#fff9c4",
    menu: [
      { id: "ta1", name: "Tantalizer Burger", price: 2800, emoji: "🍔", desc: "Beef patty, lettuce, tomato, special Tantalizer sauce" },
      { id: "ta2", name: "Grilled Chicken Quarter", price: 3200, emoji: "🍗", desc: "Quarter grilled chicken with peri-peri seasoning" },
      { id: "ta3", name: "Fried Plantain + Egg", price: 1500, emoji: "🍳", desc: "Sweet fried plantain with fried eggs, breakfast special" },
      { id: "ta4", name: "Tantalizer Rice Bowl", price: 2600, emoji: "🍚", desc: "Rice with mixed stew, chicken and coleslaw" },
      { id: "ta5", name: "Beef Suya Sticks (6)", price: 2500, emoji: "🔥", desc: "Spicy Northern-style grilled beef suya on sticks" },
      { id: "ta6", name: "Family Pack (4 chicken + 4 fries)", price: 8500, emoji: "👨‍👩‍👧‍👦", desc: "4 grilled chicken quarters and 4 portions of fries" },
    ]
  },
  {
    id: 6,
    name: "Food Co",
    emoji: "🥗",
    category: "local",
    rating: 4.5,
    time: "25–40 min",
    deliveryFee: "₦500",
    minOrder: "₦2,500",
    description: "Modern Nigerian cuisine with a healthy twist. Fresh ingredients, bold flavours.",
    badge: "Healthy",
    badgeClass: "green",
    tags: ["Healthy", "Bowls", "Nigerian", "Fresh"],
    bgColor: "#e8f5e9",
    menu: [
      { id: "fc1", name: "Power Bowl (Quinoa + Chicken)", price: 4500, emoji: "🥗", desc: "Quinoa, grilled chicken, avocado, mixed greens" },
      { id: "fc2", name: "Ofada Rice + Ayamase", price: 3200, emoji: "🍚", desc: "Local ofada rice with spicy ayamase sauce" },
      { id: "fc3", name: "Grilled Fish Plate", price: 5500, emoji: "🐟", desc: "Whole grilled tilapia with jollof rice and salad" },
      { id: "fc4", name: "Nigerian Salad Box", price: 3000, emoji: "🥙", desc: "Potato salad, coleslaw, baked beans, sardine" },
      { id: "fc5", name: "Yam Porridge + Smoked Fish", price: 2800, emoji: "🍠", desc: "Creamy yam porridge with smoked fish and spinach" },
      { id: "fc6", name: "Smoothie + Meal Combo", price: 5000, emoji: "🥤", desc: "Any meal + fresh tropical smoothie of your choice" },
    ]
  },
  {
    id: 7,
    name: "Alice Place",
    emoji: "🥩",
    category: "local",
    rating: 4.7,
    time: "30–50 min",
    deliveryFee: "₦700",
    minOrder: "₦3,000",
    description: "Premium Nigerian dining experience. Grills, continental and local perfected.",
    badge: "Premium",
    tags: ["Grills", "Continental", "Premium", "Nigerian"],
    bgColor: "#f3e5f5",
    menu: [
      { id: "ap1", name: "T-Bone Steak + Jollof", price: 9500, emoji: "🥩", desc: "Grilled T-bone steak served with party jollof rice" },
      { id: "ap2", name: "Oxtail Pepper Soup", price: 6500, emoji: "🌶️", desc: "Slow-cooked oxtail in rich Nigerian pepper broth" },
      { id: "ap3", name: "Grilled Prawns (500g)", price: 8000, emoji: "🦐", desc: "Butter-garlic grilled tiger prawns with sides" },
      { id: "ap4", name: "Asun (Spicy Goat)", price: 5500, emoji: "🐐", desc: "Smoky spiced goat meat, Alice Place signature" },
      { id: "ap5", name: "Nkwobi", price: 4500, emoji: "🥣", desc: "Spiced cow foot in rich palm oil sauce, classic" },
      { id: "ap6", name: "Full Nigerian Platter", price: 12000, emoji: "🍽️", desc: "Suya, asun, puff puff, fried fish, sides — feeds 2" },
    ]
  },
  {
    id: 8,
    name: "Danjuma Bread",
    emoji: "🍞",
    category: "pastry",
    rating: 4.6,
    time: "15–25 min",
    deliveryFee: "₦300",
    minOrder: "₦800",
    description: "Freshly baked breads, pies, and pastries. The aroma will find you before the delivery rider does.",
    badge: "Fresh Daily",
    badgeClass: "green",
    tags: ["Bread", "Pastry", "Baked", "Fresh"],
    bgColor: "#fff8e1",
    menu: [
      { id: "db1", name: "Agege Bread (Loaf)", price: 1200, emoji: "🍞", desc: "Soft, fluffy Nigerian Agege-style sliced bread" },
      { id: "db2", name: "Butter Bread", price: 1000, emoji: "🧈", desc: "Enriched butter bread, golden crust, soft crumb" },
      { id: "db3", name: "Coconut Bread", price: 1300, emoji: "🥥", desc: "Lightly sweet coconut-infused artisan loaf" },
      { id: "db4", name: "Bread + Egg + Sardine Combo", price: 2000, emoji: "🍳", desc: "Fresh bread with fried eggs and sardines" },
      { id: "db5", name: "Chin Chin (500g)", price: 1500, emoji: "🍪", desc: "Crunchy fried chin chin, lightly sweetened" },
      { id: "db6", name: "Doughnuts (6 pieces)", price: 1800, emoji: "🍩", desc: "Soft glazed doughnuts, made fresh every morning" },
    ]
  },
  {
    id: 9,
    name: "Suya Palace",
    emoji: "🔥",
    category: "local",
    rating: 4.9,
    time: "25–40 min",
    deliveryFee: "₦450",
    minOrder: "₦2,000",
    description: "The finest Northern Nigerian suya experience. Grilled on open flame, spiced to perfection.",
    badge: "🔥 Hot",
    tags: ["Suya", "Grills", "Northern", "Beef"],
    bgColor: "#fbe9e7",
    menu: [
      { id: "sp1", name: "Beef Suya (500g)", price: 3500, emoji: "🥩", desc: "Classic spiced beef suya from the open grill" },
      { id: "sp2", name: "Chicken Suya (500g)", price: 3200, emoji: "🍗", desc: "Tender chicken skewers with suya spice rub" },
      { id: "sp3", name: "Kilishi (250g)", price: 4000, emoji: "🥓", desc: "Dried spiced beef jerky, Northern Nigerian style" },
      { id: "sp4", name: "Suya + Onions + Tomato Wrap", price: 2800, emoji: "🌯", desc: "Suya in a warm flatbread with fresh onions and tomato" },
      { id: "sp5", name: "Mixed Grill Platter", price: 7000, emoji: "🍽️", desc: "Beef, chicken, and ram suya with fresh onions" },
      { id: "sp6", name: "Ram Suya (500g)", price: 4500, emoji: "🐑", desc: "Premium ram meat suya, smoky and spicy" },
    ]
  },
  {
    id: 10,
    name: "Mama's Kitchen",
    emoji: "🎂",
    category: "local",
    rating: 4.8,
    time: "30–45 min",
    deliveryFee: "₦400",
    minOrder: "₦1,800",
    description: "Home-cooked Nigerian meals made with love, just like mama used to make.",
    badge: "Home Style",
    badgeClass: "green",
    tags: ["Home Cooked", "Nigerian", "Soups", "Rice"],
    bgColor: "#e0f2f1",
    menu: [
      { id: "mk1", name: "Banga Soup + Starch", price: 2800, emoji: "🎂", desc: "Palm fruit banga soup with fresh fish and starch" },
      { id: "mk2", name: "Okra Soup + Fufu", price: 2500, emoji: "🍲", desc: "Draw soup with assorted meat served with fufu" },
      { id: "mk3", name: "White Rice + Stew + Fish", price: 2800, emoji: "🍚", desc: "Boiled rice with Nigerian tomato stew and fried fish" },
      { id: "mk4", name: "Edikaikong + Pounded Yam", price: 3200, emoji: "🥬", desc: "Nutritious vegetable soup with pounded yam" },
      { id: "mk5", name: "Beans Porridge + Plantain", price: 1800, emoji: "🎂", desc: "Creamy fried beans with fried ripe plantain" },
      { id: "mk6", name: "Sunday Rice Pack (Family)", price: 6500, emoji: "👨‍👩‍👧", desc: "Large pot of jollof rice, chicken, moi moi — feeds 3–4" },
    ]
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedLocation = localStorage.getItem('selectedLocation') || null;
let currentRestaurantId = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderRestaurants(restaurants);
  setupNavScroll();
});

function setupNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// ===== RESTAURANTS =====
function renderRestaurants(list) {
  const grid = document.getElementById('restaurants-grid');
  if (!list.length) {
    grid.innerHTML = '<div style="text-align:center;padding:3rem;color:#888;grid-column:1/-1"><div style="font-size:3rem">🍽️</div><p style="margin-top:0.5rem">No restaurants found</p></div>';
    return;
  }
  grid.innerHTML = list.map(r => `
    <div class="restaurant-card" onclick="openRestaurant(${r.id})">
      <div class="restaurant-card-img" style="background:${r.bgColor}">
        ${r.emoji ? `<span style="font-size:5rem">${r.emoji}</span>` : ''}
        ${r.badge ? `<div class="restaurant-badge ${r.badgeClass || ''}">${r.badge}</div>` : ''}
      </div>
      <div class="restaurant-card-body">
        <h3>${r.name}</h3>
        <p>${r.description}</p>
        <div style="margin-top:0.4rem">${r.tags.map(t => `<span class="r-tag">${t}</span>`).join('')}</div>
        <div class="restaurant-meta">
          <span class="rating">⭐ ${r.rating}</span>
          <span>🕐 ${r.time}</span>
          <span>🛵 ${r.deliveryFee}</span>
        </div>
        <button class="order-btn">View Menu & Order</button>
      </div>
    </div>
  `).join('');
}

function filterRestaurants(category, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  if (category === 'all') renderRestaurants(restaurants);
  else renderRestaurants(restaurants.filter(r => r.category === category));
}

// ===== RESTAURANT MODAL =====
function openRestaurant(id) {
  if (!selectedLocation) {
    openLocationModal();
    return;
  }
  currentRestaurantId = id;
  const r = restaurants.find(x => x.id === id);
  const modal = document.getElementById('restaurant-modal');
  const content = document.getElementById('restaurant-modal-content');
  content.innerHTML = `
    <button class="modal-close" onclick="closeRestaurantModal()">✕</button>
    <div class="rm-header">
      <div class="rm-emoji">${r.emoji}</div>
      <div class="rm-info">
        <h2>${r.name}</h2>
        <p>${r.description}</p>
        <div class="rm-meta">
          <span class="rating">⭐ ${r.rating}</span>
          <span>🕐 ${r.time}</span>
          <span>🛵 ${r.deliveryFee} delivery</span>
          <span>📍 ${selectedLocation}</span>
        </div>
      </div>
    </div>
    <div class="menu-section">
      <h4>Menu</h4>
      ${r.menu.map(item => renderMenuItem(item)).join('')}
    </div>
  `;
  modal.classList.add('open');
}

function renderMenuItem(item) {
  const inCart = cart.find(c => c.id === item.id);
  const qty = inCart ? inCart.qty : 0;
  return `
    <div class="menu-item" id="menu-item-${item.id}">
      <div class="menu-item-emoji">${item.emoji}</div>
      <div class="menu-item-info">
        <strong>${item.name}</strong>
        <small>${item.desc}</small>
      </div>
      <div class="menu-item-right">
        <span class="menu-price">₦${item.price.toLocaleString()}</span>
        ${qty > 0 ? `
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1, ${JSON.stringify(item).replace(/"/g, '&quot;')})">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1, ${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>
          </div>
        ` : `
          <button class="add-btn" onclick="addToCart('${item.id}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>
        `}
      </div>
    </div>
  `;
}

function closeRestaurantModal(e) {
  if (e && e.target !== document.getElementById('restaurant-modal')) return;
  document.getElementById('restaurant-modal').classList.remove('open');
}

// ===== CART =====
function addToCart(itemId, item) {
  const restaurant = restaurants.find(r => r.menu.find(m => m.id === itemId));
  // Check if cart has items from different restaurant
  if (cart.length > 0 && cart[0].restaurantId !== restaurant.id) {
    if (!confirm(`Your cart has items from ${cart[0].restaurantName}. Start a new order from ${restaurant.name}?`)) return;
    cart = [];
  }
  const existing = cart.find(c => c.id === itemId);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1, restaurantId: restaurant.id, restaurantName: restaurant.name });
  updateCartUI();
  refreshMenuItemUI(itemId, item);
}

function changeQty(itemId, delta, item) {
  const existing = cart.find(c => c.id === itemId);
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) cart = cart.filter(c => c.id !== itemId);
  updateCartUI();
  refreshMenuItemUI(itemId, item);
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  updateCartUI();
}

function refreshMenuItemUI(itemId, item) {
  const el = document.getElementById(`menu-item-${itemId}`);
  if (!el) return;
  const inCart = cart.find(c => c.id === itemId);
  const qty = inCart ? inCart.qty : 0;
  const rightEl = el.querySelector('.menu-item-right');
  rightEl.innerHTML = `
    <span class="menu-price">₦${item.price.toLocaleString()}</span>
    ${qty > 0 ? `
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1, ${JSON.stringify(item).replace(/"/g, '&quot;')})">−</button>
        <span class="qty-num">${qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1, ${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>
      </div>
    ` : `<button class="add-btn" onclick="addToCart('${item.id}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">+</button>`}
  `;
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div style="font-size:3rem">🛒</div><p>Your cart is empty</p><small>Add items from a restaurant to get started</small></div>`;
    footer.style.display = 'none';
  } else {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div style="font-size:1.8rem">${item.emoji}</div>
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <small>${item.restaurantName} · Qty: ${item.qty}</small>
        </div>
        <span class="cart-item-price">₦${(item.price * item.qty).toLocaleString()}</span>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">✕</button>
      </div>
    `).join('');
    footer.style.display = 'block';
    document.getElementById('cart-total-amount').textContent = `₦${total.toLocaleString()}`;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ===== LOCATION =====
function openLocationModal() {
  document.getElementById('location-modal').classList.add('open');
}
function closeLocationModal(e) {
  if (e && e.target !== document.getElementById('location-modal') && !e.target.classList.contains('modal-close')) return;
  if (!e) document.getElementById('location-modal').classList.remove('open');
  else document.getElementById('location-modal').classList.remove('open');
}
function setLocation(loc) {
  selectedLocation = loc;
  localStorage.setItem('selectedLocation', selectedLocation);
  document.getElementById('selected-location').textContent = `📍 ${loc}`;
  document.getElementById('location-modal').classList.remove('open');
  // Update city highlights
  document.querySelectorAll('.location-card').forEach(c => c.classList.remove('active-city'));
  document.querySelectorAll('.location-card h3').forEach(h => {
    if (h.textContent === loc) h.closest('.location-card').classList.add('active-city');
  });
  // Show toast
  showToast(`📍 Location set to ${loc}!`);
}

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) return;
  if (!selectedLocation) { openLocationModal(); return; }
  window.location.href = 'checkout.html';
}
function closeCheckoutModal(e) {
  if (e && e.target !== document.getElementById('checkout-modal')) return;
  document.getElementById('checkout-modal').classList.remove('open');
}
function renderCheckoutSummary() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryFee = 500;
  const summary = document.getElementById('checkout-summary');
  summary.innerHTML = `
    <h4>Order Summary</h4>
    ${cart.map(i => `<div class="cs-item"><span>${i.name} x${i.qty}</span><span>₦${(i.price * i.qty).toLocaleString()}</span></div>`).join('')}
    <div class="cs-item"><span>Delivery Fee</span><span>₦${deliveryFee.toLocaleString()}</span></div>
    <div class="cs-total"><span>Total</span><span>₦${(total + deliveryFee).toLocaleString()}</span></div>
  `;
}
function placeOrder() {
  const name = document.getElementById('c-name').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  const address = document.getElementById('c-address').value.trim();
  if (!name || !phone || !address) {
    alert('Please fill in all fields to complete your order.');
    return;
  }
  const orderId = 'WS-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  document.getElementById('checkout-modal').classList.remove('open');
  document.getElementById('order-id').textContent = `Order ID: ${orderId}`;
  document.getElementById('success-modal').classList.add('open');
  cart = [];
  updateCartUI();
}
function closeSuccessModal() {
  document.getElementById('success-modal').classList.remove('open');
}

// ===== HELPERS =====
function scrollToRestaurants() {
  document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
}
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#1a1208;color:white;padding:0.75rem 1.5rem;border-radius:50px;font-size:0.875rem;font-weight:500;z-index:999;animation:fadeInUp 0.3s ease;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.2)';
  t.textContent = msg;
  document.body.appendChild(t);
  const style = document.createElement('style');
  style.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(style);
  setTimeout(() => t.remove(), 3000);
}
