const electron = require('electron')
const express = require('express')
const config = require('./config/config.js')
const {app, BrowserWindow} = electron
let mainWindow

app.on('ready', () => {
  const server = express()
  require('./config/express.js')(server)
  require('./routes/index.js')(server)

  server.listen(config.server.port, config.server.host, () => {
    mainWindow = new BrowserWindow({show: false})
    mainWindow.loadURL('https://gazzz.thorsonmscott.com')
    mainWindow.on('closed', () => { mainWindow = null })
  })
})
