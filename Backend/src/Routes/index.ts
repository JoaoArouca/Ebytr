import taskRouter from "./TaskRouter";
import { Router } from "express";

const router = Router();

router.use('/task', taskRouter);

export default router;