document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-bar").innerHTML = `
    <nav style="
      background: #111;
      padding: 1rem;
      text-align: center;
    ">
      <a href="index.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Home</a>
      <a href="products.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Products</a>
      <a href="cart.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Cart</a>
      <a href="contact.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Contact</a>
      <a href="checkout.html" style="color: white; margin: 0 15px; text-decoration: none; font-weight: bold;">Checkout</a>
    </nav>
  `;
});
