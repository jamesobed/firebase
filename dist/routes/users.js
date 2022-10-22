"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const router = express_1.default.Router();
/* GET users listing. */
router.get("/read", controller_1.getallIntern);
router.post("/register", controller_1.registerIntern);
router.post("/login", controller_1.loginIntern);
router.patch("/update/:id", controller_1.updateInternRecord);
router.delete("/delete/:id", controller_1.deleteInternRecord);
exports.default = router;
//# sourceMappingURL=users.js.map