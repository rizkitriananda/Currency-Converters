const inputFrom = document.querySelector(".input-from");
const selectCurrencyFrom = document.querySelector(".select-from");
const selectCurrencyTo = document.querySelector(".select-to");
const result = document.querySelector(".result");

const convertButton = document.querySelector(".convert-button");

const data = async () => {
  const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1vPJwv8PhJoX8ytNKhprK02HLPSeNhBaVvXBb5Hz`);
  const currencies = await response.json();
  const currency = await currencies.data;
  return currency;
};

convertButton.addEventListener("click", async function () {
  const selectMoney = await data();
  const valueKursFrom = await selectMoney[selectCurrencyFrom.value];
  const valueKursTo = await selectMoney[selectCurrencyTo.value];
  const valueInputUser = inputFrom.value;

  const result = convert(valueInputUser, valueKursFrom, valueKursTo);
  updateUI(result);
});

function convert(inputUser, kursFrom, KursTo) {
  const number = (inputUser / kursFrom) * KursTo;
  const result = number.toLocaleString("de-DE");
  return result;
}

function updateUI(element) {
  result.innerHTML = element;
}
