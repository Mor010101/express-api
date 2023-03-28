const Contract = require('../models/Contract');

//export inline function so it can be called from routes.js
exports.getAllContracts = async (req, res) => {
    try{
        const contracts = await Contract.findAll();
        res.status(200).json(contracts);
    } catch(error){
        res.status(500).json({message: 'Internal server error'});
    }
};

exports.createContract = async (req, res) => {

    const contract = new Contract(JSON.parse(req.body));        //deserialize json and call constructor (id is iniatialized in ctor)
    const createdContract = await contractsService.createContract(contract);

    res.json(createdContract);
}