// 1. Image paths සහිත foodItems Array එක
const foodItems = [
    { id: 1, name: "Classic Avocado Burger", category: "Mains", price: 900, cuisine: "American", image: "image/Classic_Avocado_Burger.jpg" },
    { id: 2, name: "Margherita Pizza", category: "Mains", price: 1200, cuisine: "Italian", image: "image/Margherita_Pizza.jpg" },
    { id: 3, name: "Chicken Kottu", category: "Mains", price: 700, cuisine: "Sri Lankan", image: "image/Chicken_Kottu.jpg" },
    { id: 4, name: "Chocolate Lava Cake", category: "Desserts", price: 650, cuisine: "Desserts", image: "image/Chocolate_Lava_Cake.jpg" },
    { id: 5, name: "Iced Cappuccino", category: "Drinks", price: 400, cuisine: "Beverages", image: "image/Iced_Cappuccino.jpg" },
    { id: 6, name: "Seafood Pasta", category: "Mains", price: 1500, cuisine: "Italian", image: "image/Seafood_Pasta.jpg" }
];


function renderMenu(items) {
    const grid = document.getElementById('foodGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 20px;">No items found matching your filter.</p>`;
        return;
    }

    grid.innerHTML = items.map(item => `
        <div style="background: var(--card-bg, #ffffff); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center; padding-bottom: 15px;">
            <img src="${item.image}" alt="${item.name}" class="img-thumb" style="width: 100%; height: 180px; object-fit: cover; display: block;" onerror="this.src='https://via.placeholder.com/300x180?text=Image+Not+Found'">
            <h4 style="margin: 12px 0 5px; font-size: 1.1rem; color: var(--text-dark);">${item.name}</h4>
            <p style="color: var(--accent-color); font-weight: bold; margin-bottom: 12px;">${item.price}/= LKR</p>
            <a href="food_detail.html?id=${item.id}" class="btn btn-primary" style="padding: 6px 15px; font-size: 0.85rem; text-decoration: none; display: inline-block;">View Details</a>
        </div>
    `).join('');
}


document.addEventListener('DOMContentLoaded', () => {
    renderMenu(foodItems);
});

function filterMenu(category) {
    if (category === 'all') {
        renderMenu(foodItems);
    } else {
        renderMenu(foodItems.filter(item => item.category === category));
    }
}

function searchMenu() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = foodItems.filter(item => item.name.toLowerCase().includes(term));
    renderMenu(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(foodItems);
});