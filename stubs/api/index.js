const router = require('express').Router();

router.get('/catalog-data', (request, response) => {
    response.send(require('../json/catalog-data/success.json'))
  })

router.get('/item-data', (request, response) => {
  response.send(require('../json/catalog-data/newsuccess.json'))
})
router.post('/search', (request, response) => {
  const searchTerm = request.body.search.toLowerCase();

  try {
      const itemsData = require('../json/catalog-data/newsuccess.json');
      const itemData = itemsData.data.find(item => item.name.toLowerCase().includes(searchTerm));

      if (itemData) {
          return response.json({ data: itemData });
      } else {
          console.log('Item not found');
          return response.status(404).send('Item not found');
      }
  } catch (error) {
      console.error('Error reading file:', error);
      return response.status(500).send('Internal server error');
  }
});


module.exports = router;