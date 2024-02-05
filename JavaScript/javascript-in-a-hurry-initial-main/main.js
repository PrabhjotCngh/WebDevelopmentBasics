const weatherAPIKey = "f76693de5c51ceb886c717bf7cb2d979";
const weatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API Key}&units=metric`;

let galleryImages = [
  { src: "/assets/gallery/image1.jpg", alt: "Thumbnail Image 1" },
  { src: "/assets/gallery/image2.jpg", alt: "Thumbnail Image 2" },
  { src: "/assets/gallery/image3.jpg", alt: "Thumbnail Image 3" },
];

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

// Menu section
function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });

  document.querySelector("#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
}

// Greeting section
function greetingHandler() {
  let currentHour = new Date().getHours();
  let greetingText;

  if (currentHour < 12) {
    greetingText = "Good Morning!";
  } else if (currentHour < 19) {
    greetingText = "Good Afternoon!";
  } else if (currentHour < 24) {
    greetingText = "Good Evening!";
  } else {
    greetingText = "Welcome";
  }
  document.querySelector("#greeting").innerHTML = greetingText;
}

// Weather section
function celsiusToFahr(temperature) {
  return (temperature * 9) / 5 + 32;
}

function weatherHandler(condition, location, temperature) {
  let celsiusText = `The weather is ${condition} in ${location} and it's ${temperature.toFixed(
    1
  )}°C outside.`;
  let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(
    temperature
  ).toFixed(1)}°F outside.`;

  document.querySelector("p#weather").innerHTML = celsiusText;

  document
    .querySelector(".weather-group")
    .addEventListener("click", (event) => {
      if (event.target.id === "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
      } else {
        document.querySelector("p#weather").innerHTML = fahrText;
      }
    });
}

function getWeatherForCurrentLocation() {
  navigator.geolocation.getCurrentPosition((currentPosition) => {
    let latitude = currentPosition.latitude;
    let longitude = currentPosition.longitude;
    let url = weatherAPIUrl
      .replace("{lat}", latitude)
      .replace("{lon}", longitude)
      .replace("{API Key}", weatherAPIKey);
    //"https://opentdb.com/api.php?amount=1"
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          const condition = data.weather[0].description;
          const location = data.name;
          const temperature = data.main.temp;
          weatherHandler(condition, location, temperature);
        })
      )
      .catch((err) => {
        document.querySelector("p#weather").innerHTML =
          "Unable to get the weather info. Try again later.";
      });
  });
}

// Current time section
function currentTimeHandler() {
  setInterval(() => {
    let localTime = new Date();
    let hours = localTime.getHours();
    let minutes = localTime.getMinutes();
    let seconds = localTime.getSeconds();

    document.querySelector("span[data-time=hours]").textContent = hours
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}

//Image Gallery section
function imageGalleryHandler() {
  let mainImage = document.querySelector("#gallery > img");
  let thumbnails = document.querySelector("#gallery .thumbnails");

  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  galleryImages.forEach((image, index) => {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;
    thumb.addEventListener("click", (e) => {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;
      thumbnails.querySelectorAll("img").forEach((img) => {
        img.dataset.selected = false;
      });
      e.target.dataset.selected = true;
    });
    thumbnails.appendChild(thumb);
  });
}

// Products section
function populateProducts(productList) {
  let productsSection = document.querySelector(".products-area");
  productsSection.textContent = "";

  // Run a loop through the products and create an HTML element (product-item) for each of them
  productList.forEach((product, index) => {
    // Create the HTML element for the individual product
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");

    // Create product image
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for " + product.title;

    // Create the product details section
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create the product title, author, price-title and price
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    let productPriceTitle = document.createElement("p");
    productPriceTitle.classList.add("price-title");
    productPriceTitle.textContent = "Price";

    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent =
      product.price > 0 ? "$ " + product.price.toFixed(2) : "Free";

    // Add to product details
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(productPriceTitle);
    productDetails.append(productPrice);

    // Add all child HTML elements of the product
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add complete individual product to the product section
    productsSection.append(productElm);
  });
}

function productsHandler() {
  let freeProducts = products.filter((item) => item.price <= 0 || !item.price);
  let paidProducts = products.filter((item) => item.price > 0);

  populateProducts(products);

  document.querySelector(
    ".products-filter label[for=all] span.product-amount"
  ).textContent = products.length;
  document.querySelector(
    ".products-filter label[for=paid] span.product-amount"
  ).textContent = paidProducts.length;
  document.querySelector(
    ".products-filter label[for=free] span.product-amount"
  ).textContent = freeProducts.length;

  let productsFilter = document.querySelector(".products-filter");
  productsFilter.addEventListener("click", (e) => {
    if (e.target.id === "all") {
      populateProducts(products);
    } else if (e.target.id === "paid") {
      populateProducts(paidProducts);
    } else if (e.target.id === "free") {
      populateProducts(freeProducts);
    }
  });
}

// Footer section
function footerHandler() {
  let currentYear = new Date().getFullYear();
  document.querySelector(
    "footer"
  ).textContent = `@ ${currentYear} - All rights reserved`;
}

// Page load
menuHandler();
greetingHandler();
getWeatherForCurrentLocation();
currentTimeHandler();
imageGalleryHandler();
productsHandler();
footerHandler();

//
