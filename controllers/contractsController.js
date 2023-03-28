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
    const data = req.query;
    
    console.log(data);
    console.log(uid);

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