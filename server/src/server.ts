import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
  return res.send('hello world!')
})

app.listen(5000, () => {
  console.log('server is running')
})