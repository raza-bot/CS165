var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  try{
    if (req.body.testData === undefined)
      throw 'Field not found.'
    console.log(req.body.testData)
    res.sendStatus(200)
  }
  catch (e){
    res.status(400).send(`ERROR: ${e}`)
  }
});

module.exports = router;
