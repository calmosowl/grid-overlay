const grid = document.createElement('div');
grid.id = 'grid';

document.body.appendChild(grid);
grid.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, var(--grid-overlay-color, red) 0,#0000 1px),linear-gradient(180deg, var(--grid-overlay-color, red) 0,#0000 1px);
  background-size: var(--grid-overlay-column-size) var(--grid-overlay-row-size);
  z-index: 9999999;
`;
