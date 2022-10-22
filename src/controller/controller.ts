import express, { Request, Response, NextFunction } from "express";
import { loginSchema, options, generateToken } from "../util/utils";
import User from "../config/config";

export async function registerIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  await User.add({ data });
  return res.send({ msg: "User Added" });
}
export async function loginIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, userName } = req.body;
  console.log(email, userName);
  const validate = await loginSchema.validate(req.body, options);
  if (validate.error) {
    return res.send({ msg: validate.error.details[0].message });
  }

  const user = await User.where("email", "==", email).get();
  if (user.empty) {
    console.log("line pass");
    return res.send({ msg: "User not found" });
  } else {
    user.forEach((doc) => {
      const data = doc.data();
      if (data.userName !== userName) {
        return res.send({ msg: "Wrong password or email" });
      } else {
        const token = generateToken({ userName });
        return res.send({ msg: "User found", token });
      }
    });
  }
  return res.send({ msg: "User Added" });
}

export async function getallIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return res.send(list);
}
export async function updateInternRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  const data = req.body;
  await User.doc(id).update(data);
  return res.send({ msg: "Updated" });
}
export async function deleteInternRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;

  await User.doc(id).delete();
  return res.send({ msg: "Deleted" });
}
