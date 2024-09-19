import { Request, Response, Router } from "express";
import UserRouter from "./user.route";
import AuthRouter from "./auth.route";

/**
 * @desc Description of Functionality
 * @route POST /api/:ROUTE/:FUNCTIONALITY
 * @access Private/Public
 */

const router = Router();

router.use("/user", UserRouter);
router.use("/auth", AuthRouter);

router.get("/healthcheck", (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
