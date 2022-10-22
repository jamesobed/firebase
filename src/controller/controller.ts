import express, { Request, Response, NextFunction } from "express";

import User from "../config/config";

export async function registerIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  await User.add({ data });
  res.send({ msg: "User Added" });
}
export async function loginIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  await User.add({ data });
  res.send({ msg: "User Added" });
}

export async function getallIntern(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
}
export async function updateInternRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
}
export async function deleteInternRecord(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;

  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
}
