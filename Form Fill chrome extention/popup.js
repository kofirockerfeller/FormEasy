document.addEventListener("DOMContentLoaded", function () {
    const fillButton = document.getElementById("fillButton");
  
    fillButton.addEventListener("click", function () {
      chrome.runtime.sendMessage({ action: "fillForm" }, function (response) {
        console.log("Form filling message sent:", response);
      });
    });
  });
  