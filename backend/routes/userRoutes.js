const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { jwtAuthMiddleware } = require("../jwt");
const {
getAllUsers,
  signup,
  login,
forgotPassword,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/", asyncHandler(getAllUsers));
router.post("/signup", asyncHandler(signup));
router.post("/login", asyncHandler(login));
router.put("/",jwtAuthMiddleware, asyncHandler(updateUser));
router.put("/forgotPassword", asyncHandler(forgotPassword));
router.delete("/", jwtAuthMiddleware, asyncHandler(deleteUser));

module.exports = router;