const userController = require("./controller");

const router = require("express").Router();

router.get("/allUsers", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.post("/createUser", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;