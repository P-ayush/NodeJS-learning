const db = require("../../../models/index");
const User = db.user1;
const { authSchema } = require("../../helpers/validation");
const bcrypt = require("bcryptjs");
const { jwtAuthMiddleWare, generateToken } = require("../../helpers/jwt");
const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.status(200).send(users)

};

const getOneUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    res.status(200).send(user)

};

const createUser = async (req, res) => {

    const result = await authSchema.validateAsync(req.body);
    if (result.error) {
        console.log(result.error.details);
    } else {
        try {
            const password = req.body.password;
            const hash = await bcrypt.hash(password, 10);
            const info = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
            const user = await User.create(info);
            const payload = {
                id: user.id,
                email: user.email
            }
            const token = generateToken(payload);
            console.log("token is :", token);
            res.status(200).send(user)

        } catch (e) {
            console.log(e);
            res.status(500);
        }
    };

};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } });
    res.status(200).send(user)

};
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.destroy({ where: { id: id } });
    res.status(200).send("user deleted");

};
module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
};