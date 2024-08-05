import express from 'express';
import clubController from '../controllers/club_controller';

const club = express();

/**
 * @swagger
 * /clubs:
 *  get:
 *    summary: Get all clubs
 *    tags: [clubs]
 *    responses:
 *      200:
 *        description: Returns an array of clubs.
 */
club.route("/").get(clubController.clubsList);

export default club;