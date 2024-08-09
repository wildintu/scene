import express from 'express';
import authController from '../controllers/auth_controller';

const auth = express();

// /**
//  * @swagger
//  * /login:
//  *  post:
//  *    summary: Login a new club
//  *    tags: [Auth]
//  *    requestBody:
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
//  *                email:
//  *                    type: string
//  *                    required: true
//  *                password:
//  *                    type: string
//  *                    required: true
//  *    responses:
//  *      200:
//  *        description: Logs in a single club.
//  */
auth.route("/").post(authController.loginClub);
  // [
  //   body('email').isString().trim(),
  //   body('password').isString()
  // ],
  // validationUtils.validate,
  // authController.loginUser);


export default auth;