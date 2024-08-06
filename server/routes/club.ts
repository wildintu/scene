import express from 'express';
import clubController from '../controllers/club_controller';

const club = express();

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



export default club;