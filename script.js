const like = document.getElementById("total_like");
const coin = document.getElementById("total_coin");
const copy = document.getElementById("total_copy");
const call_list = document.getElementById("call_list");

const like_btn = document.querySelectorAll("#like_btn");
const copy_btn = document.querySelectorAll("#copy_btn");
const call_btn = document.querySelectorAll("#call_btn");
const clear_btn = document.getElementById("clear_btn");

// Like function
for (let button of like_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let likeValue = parseInt(like.innerText);
    likeValue += 1;

    like.innerText = likeValue;
  });
}

// Copy fuction
for (let button of copy_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const service = button.parentElement.parentElement;
    const contactNumber = service.querySelector("#service_number").textContent;

    navigator.clipboard
      .writeText(contactNumber)
      .then(() => {
        console.log("Number copied successfully");
      })
      .catch((err) => {
        console.error("Failed to copy number");
      });

    let copyValue = parseInt(copy.innerText);
    copyValue += 1;

    copy.innerText = copyValue;
  });
}

// Call function
for (let button of call_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Coin value
    let coinValue = parseInt(coin.innerText);
    if (coinValue < 20) {
      alert("You need more coin to call again");
      return;
    }
    coinValue -= 20;
    coin.innerText = coinValue;

    // Collecting service data
    const service = button.parentElement.parentElement;

    const serviceName = service.querySelector("#service").textContent;

    const serviceNumber = service.querySelector("#service_number").textContent;

    const newCall = document.createElement("div");

    newCall.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "p-3",
      "bg-gray-50",
      "rounded-lg",
      "text-sm"
    );
    newCall.id = "newCall";

    // createing sub-element for new call
    const newCallDetails = document.createElement("div");
    newCallDetails.classList.add("flex", "flex-col", "items-start");

    const tempServiceName = document.createElement("p");
    tempServiceName.innerText = serviceName;
    tempServiceName.classList.add("font-semibold");

    const tempServiceNumber = document.createElement("p");
    tempServiceNumber.innerText = serviceNumber;

    newCallDetails.appendChild(tempServiceName);
    newCallDetails.appendChild(tempServiceNumber);

    // Time for call history
    const now = new Date();

    const hours = now.getHours();
    const finalHours = hours > 12 ? hours - 12 : hours;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";

    const time = `${finalHours}:${minutes}:${seconds} ${meridiem}`;

    const timeElement = document.createElement("p");
    timeElement.innerText = time;

    // Creating new call log
    newCall.appendChild(newCallDetails);
    newCall.appendChild(timeElement);

    call_list.appendChild(newCall);

    // Alert for new call
    alert(`You have called ${serviceNumber} for ${serviceName}`);
  });
}

// Remove call history

clear_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const newCalls = document.querySelectorAll("#newCall");

  for (let call of newCalls) {
    call_list.removeChild(call);
  }
});
