const title = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  title.textContent = "Thank you for booking!";
  title.classList.add("happy");
  
console.log("Appointment button pressed!");
});
console.log("My JavaScript file is connected!");