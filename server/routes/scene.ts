import express from 'express'
import * as sceneController from '../controllers/scene_controller'

const scene = express();

/**
 * @swagger
 * /scenes:
 *  get:
 *    summary: Get all scenes
 *    tags: [scenes]
 *    responses:
 *      200:
 *        description: Returns an array of scenes.
 */
scene.route("/").get(sceneController.scenesList);

/**
 * @swagger
 * /scene/{id}:
 *  get:
 *    summary: Get a scene by ID
 *    tags: [scene]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the scene.
 *    responses:
 *      200:
 *        description: Returns a single scene.
 */
scene.route("/:id").get(sceneController.findScene);

export default scene