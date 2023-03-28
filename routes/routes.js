const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contractsController');


//presentation layer, only describe routes here
router.get('/contracts', contractsController.getAllContracts)

// router.post('/contract', contractsController)
// router.put('/contract:id', contractsController)
// router.delete('/contract:id', contractsController)

module.exports = router;