# No Shorts Button

Chrome/Edge extension to hide the "Shorts" button on YouTube.

## Features
- Removes the "Shorts" link/button on YouTube pages when the toggle is enabled.
- Continuously watches DOM changes (MutationObserver) to remove any new buttons that reappear.
- Toggle state is stored in `chrome.storage.local` to keep your preference.

## Install (developer mode)
1. Download or clone this repo to your machine.
2. Open `chrome://extensions` (or `edge://extensions`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this project folder.
5. Make sure the extension is toggled on in the list.

## Usage
- Open YouTube and click the extension icon.
- Use the popup toggle to hide the "Shorts" button (on by default).
- Reload the YouTube page after changing the state to apply the preference.
- The extension only removes the menu element and does not collect data.

## Project structure
- `manifest.json`: Manifest V3 config and permissions (`activeTab`, `storage`, host `youtube.com`).
- `content.js`: Removes the "Shorts" button and observes the DOM.
- `popup.html` / `popup.js`: Simple UI to enable/disable removal and store the preference.
- `icon.png`: Extension icon.

## Quick tweaks
- Different target: update the selector in `content.js` if YouTube changes the title or structure of the "Shorts" link.
- Default behavior: update `popup.js` if you want a different default than "on".

## Known limitations
- If YouTube changes the title or structure of the "Shorts" button, adjust the selector.
- The button may flash briefly during initial page load before the script removes it.
