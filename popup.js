document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");

  // Default to enabled when no preference exists
  chrome.storage.local.get(["nsb"], (result) => {
    const stored = result.nsb;
    const isEnabled = stored === undefined ? true : stored;
    toggle.checked = isEnabled;
    if (stored === undefined) {
      chrome.storage.local.set({ nsb: isEnabled });
    }
  });

  toggle.addEventListener("change", (event) => {
    const isEnabled = event.target.checked;
    chrome.storage.local.set({ nsb: isEnabled }, () => {
      console.log("Preference saved:", isEnabled);
    });
  });
});
