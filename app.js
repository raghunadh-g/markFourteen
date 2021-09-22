var initialPrice = document.querySelector("#first-side");
var quantity = document.querySelector("#second-side");
var currentPrice = document.querySelector("#third-side");
var calculate = document.querySelector("#area-button");
var show = document.querySelector("#show");

calculate.addEventListener("click", function () {
  show.classList.remove("hide");
  let firstPrice = initialPrice.value;
  let currPrice = currentPrice.value;
  let number = quantity.value;

  if (firstPrice === "" || currPrice === "" || number === "")
    alert("Fields cannot be empty");

  let diff = currPrice - firstPrice;
  if (diff > 0) {
    let profit = diff * number;
    let profitPercentage = (diff / firstPrice) * 100;
    show.innerText = `Hey, the profit is ${profit} and the percentage increase is ${profitPercentage}%`;
  } else {
    let loss = (firstPrice - currPrice) * number;
    let lossPercentage = ((-1 * diff) / firstPrice) * 100;
    show.innerText = `Hey, the loss is ${loss} and the percentage decrese is ${lossPercentage}%`;
  }
});
