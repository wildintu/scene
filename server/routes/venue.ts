import express from 'express';
import venueController from '../controllers/venue_controller';

const venue = express();

/**
 * @swagger
 * /venues:
 *  get:
 *    summary: Get all venues
 *    tags: [venues]
 *    responses:
 *      200:
 *        description: Returns an array of venues.
 */
venue.route("/").get(venueController.venuesList);

export default venue;