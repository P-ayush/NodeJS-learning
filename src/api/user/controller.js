 const db = require("../../../models/index");
const User = db.user1;
const {authSchema}=require("../../helpers/validation");

const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.status(200).send(users)

};

const getOneUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({where: {id:id}});
    res.status(200).send(user)

};

const createUser = async (req, res) => {
  
    const result = await authSchema.validateAsync(req.body);
   if(result.error){
    console.log(result.error.details);
   }else{
    const user = await User.create(req.body)
    res.status(200).send(user)
   }
   
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.update(req.body,{where: {id:id}});
    res.status(200).send(user)

};
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.destroy({where: {id:id}});
    res.status(200).send("user deleted");

};
module.exports={
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
};