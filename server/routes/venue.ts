import express from 'express'
import * as venueController from '../controllers/venue_controller'

export const venue = express();

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
venue.route("/:id").get(venueController.findVenue);