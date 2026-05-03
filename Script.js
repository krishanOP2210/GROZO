diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..ee2a088ff6bbbd47e97d451562a8f16870af46cb
--- /dev/null
+++ b/script.js
@@ -0,0 +1,154 @@
+const categories = [
+  "Fruits",
+  "Vegetables",
+  "Dairy",
+  "Bakery",
+  "Snacks",
+  "Beverages",
+  "Masalas",
+  "Household",
+];
+
+const products = [
+  { name: "Alphonso Mango", desc: "Premium Ratnagiri mangoes, 1 kg", price: 299 },
+  { name: "A2 Cow Milk", desc: "Farm-fresh whole milk, 1 L", price: 72 },
+  { name: "Classic Chips", desc: "Sea-salt potato chips, 150 g", price: 49 },
+  { name: "Baby Spinach", desc: "Hydroponic greens, 250 g", price: 89 },
+  { name: "Sourdough Bread", desc: "Freshly baked artisan loaf", price: 119 },
+  { name: "Filter Coffee", desc: "South blend, strong roast, 200 g", price: 245 },
+];
+
+const typoSuggestions = {
+  chai: ["Milk", "Sugar", "Tea Leaves"],
+  milkk: ["Milk", "Dairy", "Paneer"],
+  mangoo: ["Mango", "Fruits", "Juices"],
+  chipss: ["Chips", "Snacks", "Namkeen"],
+  cofee: ["Coffee", "Beverages", "Creamer"],
+};
+
+const translations = {
+  en: { badge: "⚡ 10-minute delivery", heading: "Trending Near You" },
+  hi: { badge: "⚡ 10 मिनट डिलीवरी", heading: "आपके पास ट्रेंडिंग" },
+  ta: { badge: "⚡ 10 நிமிட டெலிவரி", heading: "உங்கள் அருகில் பிரபலமானவை" },
+};
+
+const categoryGrid = document.getElementById("categoryGrid");
+const productsGrid = document.getElementById("productsGrid");
+const cartBtn = document.getElementById("cartBtn");
+const cartCount = document.getElementById("cartCount");
+const searchInput = document.getElementById("searchInput");
+const searchSuggestions = document.getElementById("searchSuggestions");
+const searchBtn = document.getElementById("searchBtn");
+const languageToggle = document.getElementById("language");
+const productCardTemplate = document.getElementById("productCardTemplate");
+
+let cartItems = 0;
+
+function renderSkeletons() {
+  categoryGrid.innerHTML = "";
+  for (let i = 0; i < 8; i += 1) {
+    const div = document.createElement("div");
+    div.className = "skeleton";
+    categoryGrid.append(div);
+  }
+}
+
+function renderCategories() {
+  categoryGrid.innerHTML = "";
+  categories.forEach((category) => {
+    const card = document.createElement("div");
+    card.className = "category-card glass";
+    card.textContent = category;
+    categoryGrid.append(card);
+  });
+}
+
+function renderProducts() {
+  productsGrid.innerHTML = "";
+
+  products.forEach((item, index) => {
+    const clone = productCardTemplate.content.cloneNode(true);
+    const name = clone.querySelector(".product-name");
+    const desc = clone.querySelector(".product-desc");
+    const price = clone.querySelector(".price");
+    const visual = clone.querySelector(".product-visual");
+    const addBtn = clone.querySelector(".add-btn");
+
+    name.textContent = item.name;
+    desc.textContent = item.desc;
+    price.textContent = `₹${item.price}`;
+    visual.style.background = `linear-gradient(130deg, hsl(${110 + index * 14} 90% 93%), hsl(${130 + index * 13} 80% 76%))`;
+
+    addBtn.addEventListener("click", () => {
+      cartItems += 1;
+      cartCount.textContent = cartItems;
+      cartBtn.classList.remove("bounce");
+      void cartBtn.offsetWidth;
+      cartBtn.classList.add("bounce");
+    });
+
+    productsGrid.append(clone);
+  });
+}
+
+function suggest(query) {
+  const cleaned = query.trim().toLowerCase();
+
+  if (!cleaned) {
+    searchSuggestions.classList.remove("show");
+    return;
+  }
+
+  const directMatch = products
+    .filter((item) => item.name.toLowerCase().includes(cleaned))
+    .map((item) => item.name);
+
+  const typoMatch = typoSuggestions[cleaned] || [];
+  const fallbackCategories = categories.filter((cat) =>
+    cat.toLowerCase().includes(cleaned),
+  );
+
+  const allSuggestions = [...new Set([...directMatch, ...typoMatch, ...fallbackCategories])].slice(0, 5);
+
+  searchSuggestions.innerHTML = "";
+
+  if (!allSuggestions.length) {
+    const li = document.createElement("li");
+    li.textContent = "No exact match. Try Fruits, Dairy, or Snacks.";
+    searchSuggestions.append(li);
+  } else {
+    allSuggestions.forEach((text) => {
+      const li = document.createElement("li");
+      li.textContent = text;
+      li.addEventListener("click", () => {
+        searchInput.value = text;
+        searchSuggestions.classList.remove("show");
+      });
+      searchSuggestions.append(li);
+    });
+  }
+
+  searchSuggestions.classList.add("show");
+}
+
+function applyLanguage(code) {
+  const selected = translations[code] || translations.en;
+  const expressBadge = document.querySelector(".badge.express");
+  const trendingHeading = document.querySelector("#trending h3");
+
+  expressBadge.textContent = selected.badge;
+  trendingHeading.textContent = selected.heading;
+}
+
+searchInput.addEventListener("input", (e) => suggest(e.target.value));
+searchBtn.addEventListener("click", () => suggest(searchInput.value));
+document.addEventListener("click", (e) => {
+  if (!e.target.closest(".search-shell")) {
+    searchSuggestions.classList.remove("show");
+  }
+});
+languageToggle.addEventListener("change", (e) => applyLanguage(e.target.value));
+
+renderSkeletons();
+setTimeout(renderCategories, 1100);
+renderProducts();

function becomePartner() {
  const email = document.getElementById("partnerEmail").value;

  if (!email) {
    alert("Please enter your email");
    return;
  }

  const ownerEmail = "gamerkrishna2210@gmail.com";

  const subject = "Grozo Partner Request";
  const body = `Hello, I want to become a Grozo partner.\nMy Email: ${email}`;

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${ownerEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(mailtoLink, "_blank");
}
