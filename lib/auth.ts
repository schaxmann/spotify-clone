import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.NOTIFY_ACCESS;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });
        if (!user) {
          throw new Error("No user found");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorised" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: "Not Authorised" });
  };
};
