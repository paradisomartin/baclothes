import express from 'express'

// .ENV module
import dotenv from 'dotenv'
dotenv.config()

import colors from 'colors'

import connectDB from './config/db.js'

connectDB()

const PORT = process.env.PORT

const app = express()


import products from './data/products.js'

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))

app.get('/', (req,res)=>{
    res.send('API is running...')
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})