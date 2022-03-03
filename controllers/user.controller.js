const User = require('../model/user');

exports.create = async function (req, res) {
    console.log('create');
    try {
        let myuser = new User(req.body);
        await myuser.save();
    } catch (err) {
        res.send({ message: err });
    }
    res.sendStatus(200);
};

exports.findOne = async function (req, res) {
    console.log('findOne');
    try {
        res.send(await User.find({nome: req.body.nome}));        
    } catch (error) {
        res.send(error);
    }
};

exports.getAll = async function (req, res) {
    console.log('getAll');
    try {
        res.send(await User.find({}));        
    } catch (error) {
        res.send(error);
    }
};

exports.update = async function (req, res) {
    console.log('update');
    try {
        res.send(await User.updateOne({name: res.body.nome}));
    } catch (error) {
        res.send(error);
    }
    res.sendStatus(200);
};

exports.deleteOne = async function (req, res) {
    console.log('deleteOne');
    res.sendStatus(200);
};

exports.deleteMany = async function (req, res) {
    console.log('deleteMany');
    res.sendStatus(200);
};