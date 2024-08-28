import express from 'express'
import * as attendeeController from '../controllers/attendee_controller'

export const attendee = express()

/**
 * @swagger
 * /attendees:
 *  get:
 *    summary: Get all attendees
 *    tags: [attendees]
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