import express from 'express';
import eventController from '../controllers/event_controller';

const scene = express();

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Get all events
 *    tags: [events]
 *    responses:
 *      200:
 *        description: Returns an array of events.
 */
scene.route("/").get(eventController.eventsList);

export default scene;