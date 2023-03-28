const Contract = require('../models/Contract');
const crypto = require('crypto');

//export inline function so it can be called from routes.js
exports.getAllContracts = async (req, res, next) => {
    try{
        const contracts = await Contract.findAll();
        res.status(200).json(contracts);
    } catch(error){
        next(error);
    }
};

exports.createContract = async (req, res, next) => {
    const uid = crypto.randomUUID();
    const data = req.body;
    try{
    const createdContract = await Contract.create({
        id: uid,
        chainId: data.chainId,
        address: data.address,
        name : data.name,
        symbol: data.symbol,
        icon: data.icon,
        createdAtBlock: data.createdAtBlock
    });
    res.status(201).json(createdContract);
    }catch(error){
        next(error);
    }
}

exports.updateContract = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    console.log(id);
    console.log(data);

    try{
        const contract = await Contract.findByPk(id);
        if(!contract){
            console.log("not found");
            res.status(404).json({message: 'Contract not found'});
        }
        contract.name = data.name;
        await contract.save();
        res.status(200).json(contract);
    }catch(error){
        next(error);
    }
}