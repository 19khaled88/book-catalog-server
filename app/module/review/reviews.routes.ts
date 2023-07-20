import express from 'express'
import { ReviewController } from "./reviews.controller";

const router = express.Router();

router.post("/review/create", ReviewController.reviewCreateController);
router.get("/review", ReviewController.reviewShowController);

export const ReviewRoutes = router;
