import clubService from '../services/club_service';
import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

async function loginClub(req: Request, res: Response, next: NextFunction) {
  const {email, password} = req.body;
  const club  = await clubService.getClubByEmail(email);
  if (club) {
    const passwordsMatch = await bcrypt.compare(password, club.encrypted_password);
    if (passwordsMatch) {
       const accessToken = jwt.sign({ sub: club.id, email: club.email }, `${process.env.SECRET_KEY}`, { expiresIn: 120 });
        return res.status(200).json(accessToken)
      } else {
        return res.status(400).json({ "response": "Invalid login credentials: Password does not match" })
      }
    } else {
      return res.status(400).json({ "response": "Invalid login credentials: User not found." })
  }
};

const authController = {
  loginClub
}

export default authController;
