"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const bootstrap = require('./dist-nestjs/main.js');
const path = require("path");
const url = require("url");
let win;
function createWindow() {
  bootstrap();
  win = new electron_1.BrowserWindow({
    title: 'JAC-PSOL',
    width: 900,
    height: 700,
    backgroundColor: '#ffffff',
    icon: url.format({
      pathname: path.join(__dirname, './electron/assets/icon-512x512.png'),
      protocol: 'file:',
      slashes: true,
    }),
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, './dist/jac-sol-front/index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  win.on('closed', () => win = null);
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
//# sourceMappingURL=main.js.map
