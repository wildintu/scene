import express from 'express'
import { body } from 'express-validator'
import * as validationUtils from '../utils/validator'
import * as venueController from '../controllers/venue_controller'
import * as venueService from '../services/venue_service'

export const venue = express()

/**
 * @swagger
 * /venue:
 *  get:
 *    summary: Get all venues
 *    tags: [venue]
 *    responses:
 *      200:
 *        description: Returns an array of venues.
 */
venue.route("/").get(venueController.venuesList)

/**
 * @swagger
 * /venue/{id}:
 *  get:
 *    summary: Get a venue by ID
 *    tags: [venue]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the venue.
 *    responses:
 *      200:
 *        description: Returns a single venue.
 */
venue.route("/:id").get(venueController.findVenue)

/**
 * @swagger
 * /venue:
 *  post:
 *    summary: Create a new venue
 *    tags: [venue]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                venue_id:
 *                    type: integer
 *                    required: true
 *                name:
 *                    type: string
 *                    required: true
 *                phone:
 *                    type: string
 *                    required: true
 *                email:
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
 *                description:
 *                    type: string
 *                    required: true
 *    responses:
 *      200:
 *        description: Returns a single venue.
 */
venue.route("/").post(
  [
    body('venue_id').isInt(),
    body('name').isString(),
    body('phone').isString(),
    body('email').isString().trim()
    .custom(async(email, {req}) => {
        const venue = await venueService.getVenueByEmail(email)
        if (venue) {
            throw new Error('Email is taken.')
          }}
        ),
    body('address').isString(),
    body('city').isString(),
    body('state').isString(),
    body('zip').isInt(),
    body('website').isString(),
    body('description').isString(),
  ],
  validationUtils.validate,
  venueController.newVenue)

/**
 * @swagger
 * /venue/{id}:
 *   put:
 *     summary: Update a venue
 *     tags: [venue]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the venue.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                venue_id:
 *                    type: integer
 *                    required: true
 *                name:
 *                    type: string
 *                    required: true
 *                phone:
 *                    type: string
 *                    required: true
 *                email:
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
 *                description:
 *                    type: string
 *                    required: true
 *     responses:
 *       200:
 *         description: Updates the venue object.
 */
venue.route("/:id").put(
  [
    body('venue_id').isInt(),
    body('name').isString(),
    body('phone').isString(),
    body('email').isString().trim()
    .custom(async(email, {req}) => {
      const venueEmail = await venueService.getVenueByEmail(email)
      if (venueEmail) {
          console.log('Email is not changed.')
        } else {
          console.log('Email changed.')
      }}
    ),
    body('address').isString(),
    body('city').isString(),
    body('state').isString(),
    body('zip').isInt(),
    body('website').isString(),
    body('description').isString(),
  ],
  validationUtils.validate,
  venueController.updateVenue)

/**
 * @swagger
 * /venue/{id}:
 *  delete:
 *    summary: Delete a venue by ID
 *    tags: [venue]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the venue.
 *    responses:
 *      204:
 *        description: Deletes a single venue.
 */
venue.route("/:id").delete(venueController.deleteVenue)