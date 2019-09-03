const addOverlay = document.getElementById('addOverlay');
const columnSize = document.getElementById('columnSize');
const rowSize = document.getElementById('rowSize');
const color = document.getElementById('gridColor');

addOverlay.onclick = e => {
  const rowSizeValue = rowSize.value;
  const columnSizeValue = columnSize.value;
  const colorValue = color.value

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.insertCSS(
      tabs[0].id,
      {code: `
        #grid{
          --grid-overlay-color: ${colorValue};
          --grid-overlay-row-size: ${rowSizeValue};
          --grid-overlay-column-size: ${columnSizeValue};
        }
      `}
    );

    chrome.tabs.executeScript(
      tabs[0].id,
      {file: `overlay.js`});
  });
};
