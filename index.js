// création du serveur
const express = require('express')
const app = express()
const port = 5000
const authorsRoutes = require('./routes/authors')

app.get('/', (req, res) => {
  res.send('authors API')
})

app.listen(port, () => {
  // nous informe que le serveur a démarré
  console.log(`Server is running on port ${port}`)
})