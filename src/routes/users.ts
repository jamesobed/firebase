import express from "express";
import {
  registerIntern,
  getallIntern,
  updateInternRecord,
  deleteInternRecord,
  loginIntern,
} from "../controller/controller";
const router = express.Router();

/* GET users listing. */
router.get("/read", getallIntern);
router.post("/register", registerIntern);
router.post("/login", loginIntern);
router.patch("/update/:id", updateInternRecord);
router.delete("/delete/:id", deleteInternRecord);

export default router;
