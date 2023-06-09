const express = require("express");
const router = express.Router();
const contractsController = require("../controllers/contractsController");

//presentation layer, only describe routes here
router.get("/contracts", contractsController.getAllContracts);
router.post("/contract", contractsController.createContract);
router.put("/contract/:id", contractsController.updateContract);
router.delete("/contract/:id", contractsController.deleteContract);

module.exports = router;
