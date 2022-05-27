const express = require('express')
const app = express()
const cors = require('cors')

// 設定 cors
const corsOptions = {
  origin: 'http:localhost:8787'
}
app.use(cors())

app.use(express.json()) // 設定為json格式
app.use(express.urlencoded({ extended: true }))

// 設定 routers
const productRouter = require('./routes/productsRouter')
app.use('/api/products', productRouter)

app.listen(8787, () => {
  console.log('server is already to service.')
})