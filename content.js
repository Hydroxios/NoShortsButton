// Remove the Shorts button
function removeShortsButton() {
  const shortsButton = document.querySelector('a[title="Shorts"]');
  chrome.storage.local.get(["nsb"], (result) => {
    const enabled = result.nsb ?? true; // Default on when no preference stored
    if (enabled && shortsButton) {
      shortsButton.remove();
      console.log("Bouton Shorts supprime !");
    }
  });
}

// Run at initial load
removeShortsButton();

// Watch for page changes to catch new Shorts buttons
const observer = new MutationObserver(() => {
  removeShortsButton();
});

// Observe the body for DOM changes
observer.observe(document.body, { childList: true, subtree: true });
