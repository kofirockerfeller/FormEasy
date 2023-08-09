chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "fillForm") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: fillForm
        });
      });
      sendResponse({ success: true });
    }
  });
  function fillForm(username, password) {
    // Find the username and password fields on the page
    const usernameField = document.querySelector('input[type="text"]');
    const passwordField = document.querySelector('input[type="password"]');
  
    if (usernameField && passwordField) {
      // Fill the fields with the provided data
      usernameField.value = username;
      passwordField.value = password;
    }
  }
  