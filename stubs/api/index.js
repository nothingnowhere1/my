const router = require('express').Router();

router.get('/catalog-data', (request, response) => {
    response.send(require('../json/catalog-data/success.json'))
  })

router.get('/item-data', (request, response) => {
  response.send(require('../json/catalog-data/newsuccess.json'))
})

module.exports = router;