const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Caminho absoluto para o arquivo index.html
  const indexPath = path.join(__dirname, 'index.html');
  console.log('Carregando index.html de: ', indexPath);
  win.loadFile(indexPath);
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
