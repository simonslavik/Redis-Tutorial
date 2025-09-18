import type { Request, Response, NextFunction} from "express";
import { z } from "zod";


export const validate = 
<T>(schema: z.ZodType<T>) =>
(req: Request, res: Response, next: NextFunction) => 
{
    try
    {
        schema.parse(req.body);
        next();
    }
    catch (e)
    {
        if (e instanceof z.ZodError)
        {
            return res.status(400).json({
                status: false,
                message: e.issues.map((err: z.ZodIssue) => err.message).join(", ")
            });
        }
        next(e);
    }
}
