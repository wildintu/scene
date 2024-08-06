import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

function validate(req: Request, res: Response, next: NextFunction) {
  const error = validationResult(req);
  const hasError = !error.isEmpty();

    if (hasError) {
    res.status(400).json({error: error.array({ onlyFirstError: true })});
    } else {
      next();
    }
}

const validationUtils = { validate };

export default validationUtils;