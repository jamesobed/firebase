"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInternRecord = exports.updateInternRecord = exports.getallIntern = exports.loginIntern = exports.registerIntern = void 0;
const utils_1 = require("../util/utils");
const config_1 = __importDefault(require("../config/config"));
async function registerIntern(req, res, next) {
    const data = req.body;
    await config_1.default.add({ data });
    return res.send({ msg: "User Added" });
}
exports.registerIntern = registerIntern;
async function loginIntern(req, res, next) {
    const { email, userName } = req.body;
    console.log(email, userName);
    const validate = await utils_1.loginSchema.validate(req.body, utils_1.options);
    if (validate.error) {
        return res.send({ msg: validate.error.details[0].message });
    }
    const user = await config_1.default.where("email", "==", email).get();
    if (user.empty) {
        console.log("line pass");
        return res.send({ msg: "User not found" });
    }
    else {
        user.forEach((doc) => {
            const data = doc.data();
            if (data.userName !== userName) {
                return res.send({ msg: "Wrong password or email" });
            }
            else {
                const token = (0, utils_1.generateToken)({ userName });
                return res.send({ msg: "User found", token });
            }
        });
    }
    return res.send({ msg: "User Added" });
}
exports.loginIntern = loginIntern;
async function getallIntern(req, res, next) {
    const snapshot = await config_1.default.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return res.send(list);
}
exports.getallIntern = getallIntern;
async function updateInternRecord(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    await config_1.default.doc(id).update(data);
    return res.send({ msg: "Updated" });
}
exports.updateInternRecord = updateInternRecord;
async function deleteInternRecord(req, res, next) {
    const id = req.params.id;
    await config_1.default.doc(id).delete();
    return res.send({ msg: "Deleted" });
}
exports.deleteInternRecord = deleteInternRecord;
//# sourceMappingURL=controller.js.map