// import express from "express";
// import {
//   getAdminStats,
//   getAdminUsers,
//   myProfile,
//   registerUser,
//   loginUser,
//   contactForm,
//   adminForm,
// } from "../controllers/userController.js";

// import {
//   authorizeAdmin,
//   authenticateToken,
// } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.get("/me", authenticateToken, myProfile);
// router.post("/login", loginUser);
// router.post("/register", registerUser);
// router.post("/contact", authenticateToken, contactForm);

// // Admin Routes
// router.get("/admin/users", authenticateToken, authorizeAdmin, getAdminUsers);
// router.get("/admin/stats", authenticateToken, authorizeAdmin, getAdminStats);
// router.get("/admin/contact", authenticateToken, authorizeAdmin, adminForm);

// export default router;





import express from "express";
import {
  getAdminStats,
  getAdminUsers,
  myProfile,
  registerUser,
  loginUser,
  contactForm,
  adminForm,
  saveSpecialDate, // ✅ Imported here
} from "../controllers/userController.js";

import {
  authorizeAdmin,
  authenticateToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// 👉 User Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authenticateToken, myProfile);

// 👉 Feedback/Contact Route (Protected)
router.post("/contact", authenticateToken, contactForm);

// 👉 Add Special Date Route (Protected)
router.post("/special-dates", authenticateToken, saveSpecialDate); // ✅ Added here

// 👉 Admin Routes (Protected & Admin Only)
router.get("/admin/users", authenticateToken, authorizeAdmin, getAdminUsers);
router.get("/admin/stats", authenticateToken, authorizeAdmin, getAdminStats);
router.get("/admin/contact", authenticateToken, authorizeAdmin, adminForm);

export default router;
