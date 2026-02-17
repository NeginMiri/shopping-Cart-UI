import "./style.css";

const cartCountEl = document.getElementById("cart-count");
const headphonesDivEl = document.getElementById("headphones");
const watchDivEl = document.getElementById("watch");
const shoesDivEl = document.getElementById("Shoes");
const numberitems1El = document.getElementById("number_items1");
const numberwatchEl = document.getElementById("numberwatch");
const number_ShoesEl = document.getElementById("number_Shoes");
const price_headphoneEl = document.getElementById("price-headphone");
const price_watchEl = document.getElementById("price-watch");
const price_ShoesEl = document.getElementById("price-Shoes");
const totale_price1El = document.getElementById("totale_price1");
const totale_price2El = document.getElementById("totale_price2");
const price2_ShoesEl = document.getElementById("price2_Shoes");
const neg1_btnEl = document.getElementById("neg1_btn");
const neg2_btnEl = document.getElementById("neg2_btn");
const neg3_btnEl = document.getElementById("neg3_btn");
const plus1_btnEl = document.getElementById("plus1_btn");
const plus2_btnEl = document.getElementById("plus2_btn"); 
const plus3_btnEl = document.getElementById("plus3_btn");
const remove1_btnEl = document.getElementById("remove1_btn");
const remove2_btnEl = document.getElementById("remove2_btn");
const remove3_btnEl = document.getElementById("remove3_btn");
const subtotalEl = document.getElementById("Subtotal");
const totalEl = document.getElementById("total");
const emptyCartEl = document.getElementById("empty-cart");
const cartSummaryEl = document.getElementById("cart-summary");

let headphonesCount = 1;
let watchCount = 2;   
let shoesCount = 1;

function getPrice(element) {
  return Number(element.innerText.replace("$", ""));
}

function updateCart() {
  let sum = 0;
  let productCount = 0;

  if (headphonesDivEl.isConnected) {
    sum += getPrice(totale_price1El);
    productCount++;
  }

  if (watchDivEl.isConnected) {
    sum += getPrice(totale_price2El);
    productCount++;
  }

  if (shoesDivEl.isConnected) {
    sum += getPrice(price2_ShoesEl);
    productCount++;
  }

  cartCountEl.innerText =
    productCount === 1 ? "1 item" : `${productCount} items`;

  if (productCount === 0) {
    emptyCartEl.classList.remove("hidden");
    cartSummaryEl.style.display = "none";
  } else {
    emptyCartEl.classList.add("hidden");
    cartSummaryEl.style.display = "flex";

    subtotalEl.innerText = `$${sum.toFixed(2)}`;
    totalEl.innerText = `$${(sum + 10).toFixed(2)}`;
  }
}

plus1_btnEl.addEventListener("click", () => {
  const price = getPrice(price_headphoneEl);

  headphonesCount++;
  numberitems1El.innerText = headphonesCount;
  totale_price1El.innerText = `$${(price * headphonesCount).toFixed(2)}`;

  updateCart();
});

neg1_btnEl.addEventListener("click", () => {
  if (headphonesCount > 1) {
    const price = getPrice(price_headphoneEl);

    headphonesCount--;
    numberitems1El.innerText = headphonesCount;
    totale_price1El.innerText = `$${(price * headphonesCount).toFixed(2)}`;

    updateCart();
  }
});

remove1_btnEl.addEventListener("click", () => {
  headphonesDivEl.remove();
  updateCart();
});

plus2_btnEl.addEventListener("click", () => {
  const price = getPrice(price_watchEl);

  watchCount++;
  numberwatchEl.innerText = watchCount;
  totale_price2El.innerText = `$${(price * watchCount).toFixed(2)}`;

  updateCart();
});

neg2_btnEl.addEventListener("click", () => {
  if (watchCount > 1) {
    const price = getPrice(price_watchEl);

    watchCount--;
    numberwatchEl.innerText = watchCount;
    totale_price2El.innerText = `$${(price * watchCount).toFixed(2)}`;

    updateCart();
  }
});

remove2_btnEl.addEventListener("click", () => {
  watchDivEl.remove();
  updateCart();
});

plus3_btnEl.addEventListener("click", () => {
  const price = getPrice(price_ShoesEl);

  shoesCount++;
  number_ShoesEl.innerText = shoesCount;
  price2_ShoesEl.innerText = `$${(price * shoesCount).toFixed(2)}`;

  updateCart();
});

neg3_btnEl.addEventListener("click", () => {
  if (shoesCount > 1) {
    const price = getPrice(price_ShoesEl);

    shoesCount--;
    number_ShoesEl.innerText = shoesCount;
    price2_ShoesEl.innerText = `$${(price * shoesCount).toFixed(2)}`;

    updateCart();
  }
});

remove3_btnEl.addEventListener("click", () => {
  shoesDivEl.remove();
  updateCart();
});

updateCart();
