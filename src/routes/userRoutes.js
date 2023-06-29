const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userAPI");
const { authenticate, isAdmin } = require("../middleware/authMiddleware");

// Rotas públicas
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);

// Rotas autenticadas
router.post("/", authenticate, isAdmin,UserController.createUser);
router.put("/:id", authenticate, isAdmin,UserController.updateUser);
router.delete("/:id", authenticate, isAdmin,UserController.deleteUser);

module.exports = router;
