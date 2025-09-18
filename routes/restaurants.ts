import express from 'express';
const router = express.Router();
import { z } from 'zod';
import { validate } from '../middlewares/validate.js';
import { RestaurantSchema, type Restaurant } from '../schemas/restaurant.js';


router.post("/", validate(RestaurantSchema), async (req, res) => {
    const data = req.body as Restaurant;
  res.send("List of restaurants");
});



export default router;