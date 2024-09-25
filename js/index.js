//! button switch blog button to home button

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});




//! History Button and Donation button Toggle
document.getElementById("btn-history").addEventListener("click", function () {
  viewHideToggle("history-data");
  const historyButton = document.getElementById("btn-history");
  historyButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  const donateButton = document.getElementById("btn-donate");
  donateButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  donateButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
});

document.getElementById("btn-donate").addEventListener("click", function () {
  viewHideToggle("card-section");

  const historyButton = document.getElementById("btn-history");
  const donateButton = document.getElementById("btn-donate");

  historyButton.classList.remove(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
  historyButton.classList.add(
    "border-2",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold"
  );
  donateButton.classList.add(
    "bg-lime-400",
    "px-5",
    "py-2",
    "rounded-lg",
    "font-semibold",
    "border-2",
    "border-lime-400"
  );
});

// !Donate for Flood at Noakhali, Bangladesh Item 1
document
  .getElementById("donate-now-btn-noakhali")
  .addEventListener("click", function () {
    const addMoney = getValueByIdFromInput("donate-For-noakhali-input");

    const donarBalance = donationValueAmount("main-balance");

    if (addMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (addMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }

    if (isNaN(addMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const getMoney = donationValueAmount("donation-balance-Noakhali-has");

    const donaterBalanceISNow = donarBalance - addMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetNuakhali = addMoney + getMoney;
    document.getElementById("donation-balance-Noakhali-has").innerText =
      totalDonationGetNuakhali;
    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section created
    const div = document.createElement("div");

    div.innerHTML = `
            <p class ='p-3'> You donate ${addMoney} tk for <span class ="text-green-500 font-semibold"> Nuakhaki</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
            <p class ="text-xs bg-gray-100 p-3 opacity-80 rounded-lg">Date: ${new Date()}</p>
        `;
    document.getElementById("transaction-container").appendChild(div);
  });

//!Donate for Flood Relief in Feni,Bangladesh

document
  .getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    const inputMoney = getValueByIdFromInput("donate-feni-input");
    const donarBalance = donationValueAmount("main-balance");

    if (inputMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (inputMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(inputMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    //function calculation

    const feniHasBalance = donationValueAmount("donation-balance-feni");

    const donaterBalanceISNow = donarBalance - inputMoney;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationGetFeni = inputMoney + feniHasBalance;
    document.getElementById("donation-balance-feni").innerText =
      totalDonationGetFeni;

    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section created
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You donate ${inputMoney} tk for <span class ="text-blue-500 font-semibold">Feni</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
                 <p class ="text-xs bg-gray-100 p-3 opacity-80 rounded-lg">Date: ${new Date()}</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });

//!Aid for Injured in the Quota Movement

document
  .getElementById("donate-for-student")
  .addEventListener("click", function () {
    const donateForStudent = getValueByIdFromInput("donate-amount-input");
    const donarBalance = donationValueAmount("main-balance");

    if (donateForStudent > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (donateForStudent <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(donateForStudent)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    //function calculation

    const balanceIsNow = donationValueAmount("donation-has-rightnow");

    const donaterBalanceISNow = donarBalance - donateForStudent;

    document.getElementById("main-balance").innerText = donaterBalanceISNow;

    const totalDonationStudentHas = donateForStudent + balanceIsNow;
    document.getElementById("donation-has-rightnow").innerText =
      totalDonationStudentHas;

    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    // Transaction section created
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3'> You donate ${donateForStudent} tk for <span class ="text-red-600 font-bold">Quota Movement</span>, Transaction date is ${new Date().toLocaleDateString()}</p>
                 <p class ="text-xs bg-gray-100 p-3 opacity-80 rounded-lg">Date: ${new Date()}</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });
