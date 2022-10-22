import Joi from "Joi";
import jwt from "jsonwebtoken";
export const generateToken = (user: { [key: string]: unknown }): unknown => {
  const pass = process.env.JWT_SECRET as string;
  const expiresIn = process.env.JWT_DURATION as string;
  return jwt.sign(user, pass, { expiresIn });
};

export const loginSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  userName: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
