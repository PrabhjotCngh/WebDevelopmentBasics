// Menu section
document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting section
function celsiusToFahr(temperature) {
  return (temperature * 9) / 5 + 32;
}

const greetingText = "Good Morning!";
const weatherCondition = "sunny";
const userLocation = "Mississauga";
let temperature = 24.322;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", (event) => {
  if (event.target.id === "celsius") {
    document.querySelector("p#weather").innerHTML = celsiusText;
  } else {
    document.querySelector("p#weather").innerHTML = fahrText;
  }
});

// Watch section
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
