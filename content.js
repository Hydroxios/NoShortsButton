// Fonction pour supprimer le bouton "Shorts"
function removeShortsButton() {
  const shortsButton = document.querySelector('a[title="Shorts"]');
  chrome.storage.local.get(["nsb"], (result) => {
    if (result.nsb) {
      if (shortsButton) {
        shortsButton.remove();
        console.log("Bouton Shorts supprimé !");
      }
    }
  });
}

// Exécuter la fonction au chargement initial
removeShortsButton();

// Observer les changements de la page pour détecter les nouveaux boutons Shorts
const observer = new MutationObserver(() => {
  removeShortsButton();
});

// Observer le corps de la page pour détecter les changements dans le DOM
observer.observe(document.body, { childList: true, subtree: true });
