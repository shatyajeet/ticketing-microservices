import express from 'express'
import { json } from 'body-parser'
import morgan from 'morgan'

const app = express()
app.use(json())
app.use(morgan('combined'))

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!!!')
})

app.listen(3000, () => {
  console.log('Listening in on 3000!!!!!')
})
