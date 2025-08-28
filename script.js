// Get references to counters and call history container
const like = document.getElementById("total_like");
const coin = document.getElementById("total_coin");
const copy = document.getElementById("total_copy");
const call_list = document.getElementById("call_list");

// Get references to all buttons
const like_btn = document.querySelectorAll(".like_btn");
const copy_btn = document.querySelectorAll(".copy_btn");
const call_btn = document.querySelectorAll(".call_btn");
const clear_btn = document.getElementById("clear_btn");

// ---------------- Like Function ----------------
for (let button of like_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Increase like count by 1
    let likeValue = parseInt(like.innerText);
    likeValue += 1;

    like.innerText = likeValue;
  });
}

// ---------------- Copy Function ----------------
for (let button of copy_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the service's phone number
    const service = button.parentElement.parentElement;
    const contactNumber = service.querySelector(".service_number").textContent;

    // Copy the number to clipboard
    navigator.clipboard
      .writeText(contactNumber)
      .then(() => {
        console.log("Number copied successfully");
      })
      .catch((err) => {
        console.error("Failed to copy number");
      });

    alert(`Number copied: ${contactNumber}`);

    // Increase copy count by 1
    let copyValue = parseInt(copy.innerText);
    copyValue += 1;

    copy.innerText = copyValue;
  });
}

// ---------------- Call Function ----------------
for (let button of call_btn) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Deduct 20 coins for each call
    let coinValue = parseInt(coin.innerText);
    if (coinValue < 20) {
      alert(" ❌ You need minimum 20 coins to call");
      return; // Stop if user doesn't have enough coins
    }
    coinValue -= 20;
    coin.innerText = coinValue;

    // Get service details
    const service = button.parentElement.parentElement;
    const serviceName = service.querySelector(".service").textContent;
    const serviceNumber = service.querySelector(".service_number").textContent;

    // Create a new call history entry
    const newCall = document.createElement("div");
    newCall.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "p-3",
      "bg-gray-50",
      "rounded-lg",
      "text-sm",
      "newCall"
    );

    // Sub-element: service details
    const newCallDetails = document.createElement("div");
    newCallDetails.classList.add("flex", "flex-col", "items-start");

    const tempServiceName = document.createElement("p");
    tempServiceName.innerText = serviceName;
    tempServiceName.classList.add("font-semibold");

    const tempServiceNumber = document.createElement("p");
    tempServiceNumber.innerText = serviceNumber;

    newCallDetails.appendChild(tempServiceName);
    newCallDetails.appendChild(tempServiceNumber);

    // Sub-element: timestamp
    const now = new Date();
    const hours = now.getHours();
    const finalHours = hours % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    const time = `${finalHours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${meridiem}`;

    const timeElement = document.createElement("p");
    timeElement.classList.add("text-sm", "whitespace-nowrap");
    timeElement.innerText = time;

    // Add details and time to new call
    newCall.appendChild(newCallDetails);
    newCall.appendChild(timeElement);

    // Add new call entry to call history list
    call_list.appendChild(newCall);

    // Notify user
    alert(`📞 Calling ${serviceName} ${serviceNumber} ...`);
  });
}

// ---------------- Clear Call History ----------------
clear_btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Select all created call history items
  const newCalls = document.querySelectorAll(".newCall");

  // Remove them from the call history list
  for (let call of newCalls) {
    call_list.removeChild(call);
  }
});
