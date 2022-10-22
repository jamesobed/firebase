"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInternRecord = exports.updateInternRecord = exports.getallIntern = exports.loginIntern = exports.registerIntern = void 0;
const config_1 = __importDefault(require("../config/config"));
async function registerIntern(req, res, next) {
    const data = req.body;
    await config_1.default.add({ data });
    res.send({ msg: "User Added" });
}
exports.registerIntern = registerIntern;
async function loginIntern(req, res, next) {
    const data = req.body;
    await config_1.default.add({ data });
    res.send({ msg: "User Added" });
}
exports.loginIntern = loginIntern;
async function getallIntern(req, res, next) {
    const snapshot = await config_1.default.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
}
exports.getallIntern = getallIntern;
async function updateInternRecord(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    await config_1.default.doc(id).update(data);
    res.send({ msg: "Updated" });
}
exports.updateInternRecord = updateInternRecord;
async function deleteInternRecord(req, res, next) {
    const id = req.params.id;
    await config_1.default.doc(id).delete();
    res.send({ msg: "Deleted" });
}
exports.deleteInternRecord = deleteInternRecord;
//# sourceMappingURL=controller.js.map