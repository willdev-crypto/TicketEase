const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater'); 

// Configurar logs para autoUpdater (opcional, mas útil para depuração)
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  const indexPath = path.join(__dirname, 'index.html');
  console.log('Carregando index.html de: ', indexPath);
  win.loadFile(indexPath);

  
  win.webContents.on('did-finish-load', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // --- Listeners para autoUpdater ---

  autoUpdater.on('checking-for-update', () => {
    console.log('Verificando por atualizações...');
  });

  autoUpdater.on('update-available', (info) => {
    console.log('Atualização disponível.');
    dialog.showMessageBox({
      type: 'info',
      title: 'Atualização Disponível',
      message: `Uma nova versão (${info.version}) está disponível. Baixando...`
    });
  });

  autoUpdater.on('update-not-available', (info) => {
    console.log('Nenhuma atualização disponível.');
  });

  autoUpdater.on('error', (err) => {
    console.error('Erro na atualização:', err);
    dialog.showErrorBox('Erro na Atualização', 'Ocorreu um erro ao tentar atualizar o aplicativo.');
  });

  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Velocidade de Download: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Baixado ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    console.log(log_message);
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log('Atualização baixada.');
    dialog.showMessageBox({
      type: 'info',
      title: 'Atualização Pronta',
      message: 'A atualização foi baixada e será instalada na próxima vez que o aplicativo for reiniciado.'
    }).then(() => {
      autoUpdater.quitAndInstall(); 
    });
  });

  

});
