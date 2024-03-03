const userController = require("./controller");

const router = require("express").Router();
const { jwtAuthMiddleWare } = require("../../helpers/jwt");

router.get("/allUsers",jwtAuthMiddleWare, userController.getAllUsers);
router.get("/:id", jwtAuthMiddleWare, userController.getOneUser);
router.post("/createUser", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;