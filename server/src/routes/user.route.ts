import { Request, Response, Router } from "express";
import UserModel from "../models/user.model";
import { userData } from "../utils/dummy_data";

const router = Router();

// router.post("/createDummyData", async (req: Request, res: Response) => {
//   const response = await UserModel.insertMany(userData);
//   return res.json(response);
// });

export default router;
