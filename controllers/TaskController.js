const Task = require('../models/Task');


exports.getAll = async function (req, res) {
    // let models = await Task.find()
	console.log("TCL: req.user.id", req.user.id);
	let models = await Task.find({userID: req.user.id})
        .catch(err => console.log(err.message))
    return models ? res.json(models) : [];
};


exports.getOne = async function (req, res) {
    let model = await Task.findById(req.params.id)
        .catch(err => console.log(err.message))
    return model ? res.json(model) : [];
};


exports.create = async function (req, res) {
	req.body.userID = req.user.id;
    let model = await Task.create(req.body)
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        })
    return model ? res.json(model) : [];
};


exports.delete = async function (req, res) {
    let model = await Task.findOneAndDelete({
            _id: req.params.id
        })
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        })
    return model ? res.json(model) : res.status(404).end();
};


exports.update = async function (req, res) {
    let model = await Task.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true,
        })
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        });
    return model ? res.json(model) : res.status(404).end();
};