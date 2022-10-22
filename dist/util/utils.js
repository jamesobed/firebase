"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.loginSchema = exports.generateToken = void 0;
const Joi_1 = __importDefault(require("Joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (user) => {
    const pass = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_DURATION;
    return jsonwebtoken_1.default.sign(user, pass, { expiresIn });
};
exports.generateToken = generateToken;
exports.loginSchema = Joi_1.default.object().keys({
    email: Joi_1.default.string().trim().lowercase().required(),
    userName: Joi_1.default.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required(),
});
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
//# sourceMappingURL=utils.js.map