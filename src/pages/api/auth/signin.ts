import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../services/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const body = JSON.parse(JSON.stringify(req.body));

      const { email, password } = body;

      if (!(email && password)) {
        return res.status(400).send("All input is required");
      }

      const user = await User.findOne({ email }).lean();

      if (!user) return res.status(400).send("Invalid Credentials");

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (user && isPasswordMatch) {
        const secretJwrtCode = process.env.SECRET_JWT_CODE;

        if (!secretJwrtCode) return res.status(500);

        const token = jwt.sign(user, secretJwrtCode, {
          //expiresIn: "2h",
        });

        user.token = token;

        delete user.password;

        //inserir docie
        return res.status(200).json(user);

      }
      return res.status(400).send("Invalid Credentials");
    }

    return res.status(404);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ data: error, message: error.message });
  }
}
