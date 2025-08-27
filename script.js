const like = document.getElementById("total_like");
const coin = document.getElementById("total_coin");
const copy = document.getElementById("total_copy");

const like_btn = document.querySelectorAll("#like_btn");
const copy_btn = document.querySelectorAll("#copy_btn");
const call_btn = document.querySelectorAll("#call_btn");

for (let button of like_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let likeValue = parseInt(like.innerText);
    likeValue += 1;

    like.innerText = likeValue;
  });
}

for (let button of copy_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let copyValue = parseInt(copy.innerText);
    copyValue += 1;

    copy.innerText = copyValue;
  });
}

for (let button of call_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let coinValue = parseInt(coin.innerText);
    coinValue -= 20;

    if (coinValue < 20) {
      alert("You need more coin to call again");
      return;
    }

    coin.innerText = coinValue;

    const parent = button.parentElement.parentElement;

    const serviceName = parent.querySelector("#service").textContent;

    const serviceNumber = parent.querySelector("#service_number").textContent;

    alert(`You have called ${serviceNumber} for ${serviceName} `);
  });
}
