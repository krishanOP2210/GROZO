// =========================
// FILE NAME: script.js
// =========================

let cart = 0;

function addToCart(){

  cart++;

  document.getElementById("cart-count").innerText = cart;

  alert("Product Added To Cart");

}

function searchProduct(){

  const value =
    document.getElementById("searchInput").value;

  if(value === ""){
    alert("Please enter product name");
  }
  else{
    alert("Searching for: " + value);
  }

}

function becomePartner(){

  const email =
    document.getElementById("partnerEmail").value;

  if(email === ""){
    alert("Please enter your Gmail");
    return;
  }

  const ownerEmail =
    "gamerkrishna2210@gmail.com";

  const subject =
    "Grozo Partner Request";

  const body =
    `Hello, I want to become a Grozo partner.%0D%0AMy Email: ${email}`;

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${ownerEmail}&su=${subject}&body=${body}`;

  window.open(gmailLink, "_blank");

}
