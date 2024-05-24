const router = require('express').Router();

router.get('/catalog-data', (request, response) => {
    response.send(require('../json/catalog-data/success.json'))
  })


router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin") {
    response.send(require("../json/user/customer.success.json"));
  } else {
    response.send(require("../json/catalog-data/success.json"));
  }
});

router.post('/search', (req, res) => {
  const { search } = req.body;

  if (search === "Футболка с принтом Мосфильм") {
    return res.send(require("../json/seach/item.success.json"));
  }

  res.send(require("../json/seach/success.json"));
})

module.exports = router;