# No Shorts Button

Extension Chrome/Edge pour masquer le bouton "Shorts" sur YouTube.

## Fonctionnalites
- Supprime le lien/bouton "Shorts" sur les pages YouTube lorsque l'interrupteur est actif.
- Surveille en continu les changements du DOM (MutationObserver) pour retirer les nouveaux boutons qui reapparaissent.
- Etat de l'interrupteur memorise dans `chrome.storage.local` pour conserver votre preference.

## Installation (mode developpeur)
1. Telechargez ou clonez ce depot sur votre machine.
2. Ouvrez `chrome://extensions` (ou `edge://extensions`).
3. Activez **Mode developpeur**.
4. Cliquez sur **Charger l'extension non empaquetee** et selectionnez le dossier du projet.
5. Assurez-vous que l'extension est activee dans la liste.

## Utilisation
- Ouvrez YouTube puis cliquez sur l'icone de l'extension.
- Activez l'interrupteur dans le popup pour cacher le bouton "Shorts" (desactive par defaut).
- Rechargez la page YouTube si vous venez de changer l'etat pour appliquer la preference.
- L'extension se contente de retirer l'element du menu et ne collecte aucune donnee.

## Structure du projet
- `manifest.json` : configuration Manifest V3 et permissions (`activeTab`, `storage`, hote `youtube.com`).
- `content.js` : suppression du bouton "Shorts" et observation du DOM.
- `popup.html` / `popup.js` : interface simple pour activer/desactiver la suppression et stocker la preference.
- `icon.png` : icone de l'extension.

## Personnalisation rapide
- Cible different : mettez a jour le selecteur dans `content.js` si YouTube change le titre ou la structure du lien "Shorts".
- Comportement par defaut : dans `popup.js`, changez la valeur initiale `result.nsb || false` si vous voulez que l'extension soit active par defaut.

## Limitations connues
- Si YouTube change le titre ou la structure du bouton "Shorts", il faudra ajuster le selecteur.
- Le bouton peut reapparaitre temporairement pendant le chargement initial avant que le script ne le retire.
