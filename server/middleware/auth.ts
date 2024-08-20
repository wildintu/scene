import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export async function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === 'test') {
    res.locals.club_id = 1;
    return next();
  }

  if (req.path === "/login" && req.method == "POST") return next();
  if (req.path === "/club" && req.method == "POST") return next();
  if (req.path.match("docs")) return next();

  const splitAuth = req.headers.authorization?.split(" ");
  const token = splitAuth && splitAuth.length >= 2 && splitAuth[1];

  // const token = req.headers.authorization;

  if (token) {
    try {
      const tokenVerified = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (tokenVerified) {
        console.log(tokenVerified);
        res.locals.club = tokenVerified.sub;
        return next();
      }
    } catch {
      return res.sendStatus(401);
    }
  }
  return res.sendStatus(401);
};
