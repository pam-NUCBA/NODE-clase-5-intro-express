const express = require('express')
const PORT = 5000;

const app = express()

//funcion sarasa
const hola = (req, res, next) => {
  console.log('hola')
  next()
}
//middleware
app.use(hola)

//routes
app.get("/", (req, res) => {
  res.send(`
  <h1>Hola a todos</h1>
  <p>Por favor no hagan esto en casa.</p>`)
})

app.get("/hola", (req, res) => {
  res.send(`
  <h1>Hola a todos</h1>
  <p>Por favor no hagan esto en casa.</p>`)
})

app.get("*", (req, res) => {
  res.send('oh no!')

})

app.listen(PORT)