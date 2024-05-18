const router = require('express').Router();

router.get('/catalog-data', (request, response) => {
    response.send(require('../json/catalog-data/success.json'))
  })

module.exports = router;
