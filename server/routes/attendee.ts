import express from 'express';
import attendeeController from '../controllers/attendee_controller';

const attendee = express();

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
attendee.route("/").get(attendeeController.attendeesList);

export default attendee;