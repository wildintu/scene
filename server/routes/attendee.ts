import express from 'express'
import { body } from "express-validator"
import * as validationUtils from '../utils/validator'
import * as attendeeController from '../controllers/attendee_controller'
import * as attendeeService from '../services/attendee_service'


export const attendee = express()

/**
 * @swagger
 * /attendee:
 *  get:
 *    summary: Get all attendees
 *    tags: [attendee]
 *    responses:
 *      200:
 *        description: Returns an array of attendees.
 */
attendee.route("/").get(attendeeController.attendeesList)

/**
 * @swagger
 * /attendee/{id}:
 *  get:
 *    summary: Get a attendee by ID
 *    tags: [attendee]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the attendee.
 *    responses:
 *      200:
 *        description: Returns a single attendee.
 */
attendee.route("/:id").get(attendeeController.findAttendee)

/**
 * @swagger
 * /attendee:
 *  post:
 *    summary: Create a new attendee
 *    tags: [attendee]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                event_id:
 *                    type: integer
 *                    required: true
 *                email:
 *                    type: string
 *                    required: true
 *                password:
 *                    type: string
 *                    required: true
 *                first_name:
 *                    type: string
 *                    required: true
 *                last_name:
 *                    type: string
 *                    required: true
 *                date_of_birth:
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
 *                club:
 *                    type: string
 *                    required: true
 *    responses:
 *      200:
 *        description: Returns a single attendee.
 */
attendee.route("/").post(
  [
    body('event_id').isInt(),
    body('email').isString().trim()
    .custom(async(email, {req}) => {
        const attendee = await attendeeService.getAttendeeByEmail(email)
        if (attendee) {
            throw new Error('Email is taken.')
          }}
        ),
    body('first_name').isString(),
    body('last_name').isString(),
    body('phone').isString(),
    body('address').isString(),
    body('city').isString(),
    body('state').isString(),
    body('zip').isInt(),
    body('club').isString(),
  ],
  validationUtils.validate,
  attendeeController.newAttendee)

/**
 * @swagger
 * /attendee/{id}:
 *   put:
 *     summary: Update a attendee
 *     tags: [attendee]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the attendee.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                event_id:
 *                    type: integer
 *                    required: true
 *                email:
 *                    type: string
 *                    required: true
 *                password:
 *                    type: string
 *                    required: true
 *                first_name:
 *                    type: string
 *                    required: true
 *                last_name:
 *                    type: string
 *                    required: true
 *                date_of_birth:
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
 *                club:
 *                    type: string
 *                    required: true
 *     responses:
 *       200:
 *         description: Updates the attendee object.
 */
attendee.route("/:id").put(
  [
    body('event_id').isInt(),
    body('email').isString().trim()
    .custom(async(email, {req}) => {
        const attendeeEmail = await attendeeService.getAttendeeByEmail(email)
        if (attendeeEmail) {
            console.log('Email is not changed.')
          } else {
            console.log('Email changed.')
          }}
        ),
        body('first_name').isString(),
        body('last_name').isString(),
        body('phone').isString(),
        body('address').isString(),
        body('city').isString(),
        body('state').isString(),
        body('zip').isInt(),
        body('club').isString(),
  ],
  validationUtils.validate,
  attendeeController.updateAttendee)

/**
 * @swagger
 * /attendee/{id}:
 *  delete:
 *    summary: Delete a attendee by ID
 *    tags: [attendee]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the attendee.
 *    responses:
 *      204:
 *        description: Deletes a single attendee.
 */
attendee.route("/:id").delete(attendeeController.deleteAttendee)