var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next1) {
  console.log('Time: ', Date.now())
  next1()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})
router.get('/ifly',function (req, res) {
    res.send('Ish flies fast')
  })

module.exports = router