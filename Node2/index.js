const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Estas en inicio')
})

app.get('/Contacto', (req, res) => {
    res.send('Estas en contacto')
  })

  app.get('/Sobre', (req, res) => {
    res.send('Estas en informacion')
  })

  app.get('/Registro', (req, res) => {
    res.send('Estas en registro')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})