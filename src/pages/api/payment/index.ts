import type { NextApiRequest, NextApiResponse } from "next";
import { Payment } from "../../../services/database";
import { authenticate } from "@/utils/apiAuth";
import { createDossie } from "@/utils/createDossie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const auth: any = authenticate(req);
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      const query = JSON.parse(JSON.stringify(req.query));
      const orders = await Payment.find(query);
      return res.status(200).json(orders);
    }

    if (req.method === "POST") {
      const auth: any = authenticate(req);
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      const body = JSON.parse(JSON.stringify(req.body));

      const room = new Payment(body);
      const bodyDossie = {
        userId: auth._id,
        action: 1,
        identfier: 2,
      };
      createDossie(bodyDossie);

      await room.save();

      return res.status(201).json(room);
    }

    if (req.method === "PUT") {
      const auth: any = authenticate(req);
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      const body = JSON.parse(JSON.stringify(req.body));

      const _id = body._id;
      delete body._id;

      const bodyDossie = {
        userId: auth._id,
        action: 2,
        identfier: 2,
      };
      createDossie(bodyDossie);

      const { modifiedCount } = await Payment.updateOne({ _id }, body).lean();

      if (modifiedCount > 0) {
        const order = await Payment.findOne({ _id }).lean();
        return res.status(200).json(order);
      }
    }

    return res.status(404);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ data: error, message: error.message });
  }
}
