// Remove the Shorts button
const removeShorts = () => {
  const shortsButton = document.querySelector('a[title="Shorts"]');
  const shorts = document.getElementById('dismissible');
  chrome.storage.local.get(["nsb"], (result) => {
    const enabled = result.nsb ?? true; // Default on when no preference stored
    if (!enabled) return;
    if (shortsButton) shortsButton.remove();
    if (shorts) shorts.remove();
  });
}

// Run at initial load
removeShorts();

// Watch for page changes to catch new Shorts
const observer = new MutationObserver(removeShorts);

// Observe the body for DOM changes
observer.observe(document.body, { childList: true, subtree: true });
