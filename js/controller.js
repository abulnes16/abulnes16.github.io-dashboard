const switchButton = document.querySelector("#switch");
const switchContainer = document.querySelector("#button-switch");
const themeText = document.querySelector("#theme-text");
const statsCards = document.querySelectorAll(".stats-item, .metric-item");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const highlightTexts = document.querySelectorAll(".small-text");

switchButton.addEventListener("click", () => {
  //HTML Element class toogle  
  body.classList.toggle("light-bg");
  body.classList.toggle("light-text");
  footer.classList.toggle("light-card");
  
  //Class elements 
  statsCards.forEach((card) => {
    card.classList.toggle("light-card");
  });
  highlightTexts.forEach((text) => {
    text.classList.toggle("light-highlight-text");
  });

  //Button switch
  switchContainer.classList.toggle("light-switch");
  switchButton.classList.toggle("right-switch");
  if (themeText.innerHTML === "Dark Mode") {
    themeText.innerHTML = "Ligth Mode";
  } else {
    themeText.innerHTML = "Dark Mode";
  }
});
