import carouselData from './carouselData';

const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ carouselData: carouselData })
})

module.exports = app