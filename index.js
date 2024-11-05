const express = require('express')
const app = express()
const livrosRoutes = require('./Routes/livrosRoutes')
const sequelize = require('./Connection/connection')
const dotenv = require('dotenv').config()

app.use(express.json())

app.get ('/', (req,res) => {
  res.send('Hello world')
})



app.use("/livros", livrosRoutes);



app.listen (8000, () => {
  console.log('Servidor rodando na porta http://localhost:8000');
  
})