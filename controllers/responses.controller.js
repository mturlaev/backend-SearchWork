const Response = require("../models/Response.model");

module.exports.responsesController = {
    getResponses: async (req, res) => {
        try {
            const response = await Response.find()
            .populate("user")
            .populate("resume")
            .populate("vacancy");
            res.json(response)
        } catch (error) {
            res.json(error.message)
        }
    },
    postResponse: async (req, res) => {
        try {
            const response = await Response.create({
                name: req.body.name,
                user: req.body.user,
                resume: req.body.resume,
                vacancy: req.body.vacancy,
            });
            res.json(response)
        } catch (error) {
            resjson(error.message)
        }
    },
    patchResponse: async (req, res) => {
        try {
            const response = await Response.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                user: req.body.user,
                resume: req.body.resume,
                vacancy: req.body.vacancy,
            });
            res.json(response);
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteResponse: async (req, res) => {
        try {
            const response = await Response.findByIdAndRemove(req.params.id);
            res.json("Отклик удален")
        } catch (error) {
            res.json(error.message)
        }
    },
}