import express from 'express';
import { body, param, query } from "express-validator";
import validationUtils from '../utils/validator';
import * as clubController from '../controllers/club_controller';
import * as clubService from '../services/club_service';

export const club = express();

/**
 * @swagger
 * /club:
 *  get:
 *    summary: Get all clubs
 *    tags: [club]
 *    responses:
 *      200:
 *        description: Returns an array of clubs.
 */
club.route("/").get(clubController.clubsList);

/**
 * @swagger
 * /club/{id}:
 *  get:
 *    summary: Get a club by ID
 *    tags: [club]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the club.
 *    responses:
 *      200:
 *        description: Returns a single club.
 */
club.route("/:id").get(clubController.findClub);

/**
 * @swagger
 * /club:
 *  post:
 *    summary: Create a new club
 *    tags: [club]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                club_id:
 *                    type: integer
 *                    required: true
 *                email:
 *                    type: string
 *                    required: true
 *                encrypted_password:
 *                    type: string
 *                    required: true
 *                name:
 *                    type: string
 *                    required: true
 *                phone:
 *                    type: string
 *                    required: true
 *                address:
 *                    type: string
 *                    required: true
 *                city:
 *                    type: string
 *                    required: true
 *                state:
 *                    type: string
 *                    required: true
 *                zip:
 *                    type: integer
 *                    required: true
 *                website:
 *                    type: string
 *                    required: true
 *    responses:
 *      200:
 *        description: Returns a single club.
 */
club.route("/").post(
  [
    body('club_id').isInt(),
    body('email').isString().trim()
    .custom(async(email, {req}) => {
      const club = await clubService.getClubByEmail(email)
      if (club) {
        throw new Error('Email is taken.')
      }}
    ),
    body('name').isString(),
    body('phone').isString().trim(),
    body('address').isString(),
    body('city').isString(),
    body('state').isString(),
    body('zip').isInt(),
    body('website').isString(),
  ],
  validationUtils.validate,
  clubController.newClub);

// /**
//  * @swagger
//  * /club/{id}:
//  *   put:
//  *     summary: Update a club
//  *     tags: [club]
//  *     parameters:
//  *      - name: id
//  *        in: path
//  *        type: integer
//  *        description: The ID of the club.
//  *     requestBody:
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
//  *                firstName:
//  *                    type: string
//  *                    required: true
//  *                lastName:
//  *                    type: string
//  *                    required: true
//  *                email:
//  *                    type: string
//  *                    required: true
//  *                phone:
//  *                    type: string
//  *                    required: true
//  *                address:
//  *                    type: string
//  *                    required: true
//  *                city:
//  *                    type: string
//  *                    required: true
//  *                state:
//  *                    type: string
//  *                    required: true
//  *                zip:
//  *                    type: string
//  *                    required: true
//  *     responses:
//  *       200:
//  *         description: returns the club object.
//  */
// club.route("/:id").put(
//   [
//     body('firstName').isString(),
//     body('lastName').isString(),
//     body('email').isString().trim()
//       .custom(async(email, {req}) => {
//         const club = await clubService.getclubByEmail(email)
//         if (club) {
//          throw new Error('Email is taken.')
//         }}
//     ),
//     body('phone').isString().trim(),
//     body('address').isString(),
//     body('city').isString(),
//     body('state').isString(),
//     body('zip').isString().trim(),
//   ],
//   validationUtils.validate,
//   clubController.updateclub);

// /**
//  * @swagger
//  * /club/{id}:
//  *  delete:
//  *    summary: Delete a club by ID
//  *    tags: [club]
//  *    parameters:
//  *      - name: id
//  *        in: path
//  *        type: integer
//  *        description: The ID of the club.
//  *    responses:
//  *      204:
//  *        description: Returns a single club.
//  */
// club.route("/:id").delete(clubController.deleteclub);