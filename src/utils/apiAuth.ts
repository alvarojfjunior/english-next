import type { NextApiRequest } from "next";
import jwt from "jsonwebtoken";



export const authenticate = (req: NextApiRequest): string | jwt.JwtPayload | undefined => {
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  if (!token) {
    return undefined;
  }

  try {
    const secretJwtCode = process.env.SECRET_JWT_CODE;
    if (!secretJwtCode) return undefined;

    const decoded = jwt.verify(token, secretJwtCode);
    if (!decoded) return undefined;

    return decoded;
  } catch (error) {
    return undefined;
  }
};
