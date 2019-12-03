const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { username } = req.body

        let user = await User.findOne({ username });

        if(!user) {
            user = await User.create({
                username
            })
        }
        console.log(user)
        return res.json(user);
    },

    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async destroy(req, res) {
        const { _id } = req.body

        const remove = await User.deleteOne({ _id })
    },
};