document.addEventListener("DOMContentLoaded", function () {

  console.log(chrome)

  // Charger l'état du checkbox au démarrage
  chrome.storage.local.get(["nsb"], (result) => {
    console.log(result)
    document.getElementById("toggle").checked = result.nsb || false;
  });

  // Sauvegarder l'état lorsque l'utilisateur modifie le checkbox
  document.getElementById("toggle").addEventListener("change", (event) => {
    const isEnabled = event.target.checked;
    chrome.storage.local.set({ nsb: isEnabled }, () => {
      console.log("Préférence sauvegardée :", isEnabled);

      chrome.storage.local.get(["nsb"], (result) => {
        console.log(result)
      });
    });
  });
});
