// DATA
const categories = ["Fruits", "Dairy", "Snacks"];

const products = [
  { name: "Banana", price: 40, category: "Fruits" },
  { name: "Milk", price: 60, category: "Dairy" },
  { name: "Chips", price: 20, category: "Snacks" }
];

// ELEMENTS
const categoryGrid = document.getElementById("categoryGrid");
const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");

let cart = 0;

// SHOW CATEGORIES
categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = cat;

  div.onclick = () => showProducts(cat);

  categoryGrid.appendChild(div);
});

// SHOW PRODUCTS
function showProducts(filter = "All") {
  productsGrid.innerHTML = "";

  products
    .filter(p => filter === "All" || p.category === filter)
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button>Add</button>
      `;

      div.querySelector("button").onclick = () => {
        cart++;
        cartCount.innerText = cart;
      };

      productsGrid.appendChild(div);
    });
}

// SEARCH
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  productsGrid.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(value))
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button>Add</button>
      `;

      div.querySelector("button").onclick = () => {
        cart++;
        cartCount.innerText = cart;
      };

      productsGrid.appendChild(div);
    });
});

// INITIAL LOAD
showProducts();

// ✅ PARTNER FUNCTION
function becomePartner() {
  const email = document.getElementById("partnerEmail").value;

  if (!email) {
    alert("Enter your email");
    return;
  }

  const ownerEmail = "gamerkrishna2210@gmail.com";

  const subject = "Grozo Partner Request";
  const body = `Hello, I want to become a partner.\nMy email: ${email}`;

  const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${ownerEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(link, "_blank");
}
