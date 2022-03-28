const $changeTimeMonthly = document.querySelector("#changeTime__monthly");
const $changeTimeYearly = document.querySelector("#changeTime__yearly");


const $cardPricePro = document.querySelector("#cardPricePro");
const $cardPriceEnterprise = document.querySelector("#cardPriceEnterprise");
const $cardPriceTime1 = document.querySelector(".cardPrice__time--first");
const $cardPriceTime2 = document.querySelector(".cardPrice__time--second");
const $cardPriceTime3 = document.querySelector(".cardPrice__time--third");


$changeTimeYearly.addEventListener("click" , () => {
    $cardPriceTime1.textContent = "year";
    $cardPriceTime2.textContent = "year";
    $cardPriceTime3.textContent = "year";

    $cardPricePro.textContent = "$99";
    $cardPriceEnterprise.textContent = "$699";

    $changeTimeYearly.style.backgroundColor = "#4927ec";
    $changeTimeYearly.style.color = "#fff";
    $changeTimeMonthly.style.backgroundColor = "transparent";
    $changeTimeMonthly.style.color = "#000";
})

$changeTimeMonthly.addEventListener("click" , () => {
    $cardPriceTime1.textContent = "month";
    $cardPriceTime2.textContent = "month";
    $cardPriceTime3.textContent = "month";

    $cardPricePro.textContent = "$15";
    $cardPriceEnterprise.textContent = "$99";

    $changeTimeMonthly.style.backgroundColor = "#4927ec";
    $changeTimeMonthly.style.color = "#fff";
    $changeTimeYearly.style.backgroundColor = "transparent";
    $changeTimeYearly.style.color = "#000";

})

