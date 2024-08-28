import express from 'express'
import { body } from 'express-validator'
import * as validationUtils from '../utils/validator'
import * as sceneController from '../controllers/scene_controller'

export const scene = express();

/**
 * @swagger
 * /scene:
 *  get:
 *    summary: Get all scenes
 *    tags: [scene]
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

/**
 * @swagger
 * /scene:
 *  post:
 *    summary: Create a new scene
 *    tags: [scene]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                club_id:
 *                    type: integer
 *                    required: true
 *                venue_id:
 *                    type: integer
 *                    required: true
 *                title:
 *                    type: string
 *                    required: true
 *                event_date:
 *                    type: string
 *                    required: true
 *                description:
 *                    type: string
 *                    required: true
 *                cost:
 *                    type: string
 *                    required: true
 *                start_at:
 *                    type: string
 *                    format: date-time
 *                    required: true
 *                end_at:
 *                    type: string
 *                    format: date-time
 *                    required: true
 *    responses:
 *      200:
 *        description: Returns a single scene.
 */
scene.route("/").post(
  [
    body('club_id').isInt(),
    body('venue_id').isInt(),
    body('title').isString(),
    body('event_date').isString(),
    body('cost').isString(),
    body('start_at').isString(),
    body('end_at').isString(),
  ],
  validationUtils.validate,
  sceneController.newScene)

/**
 * @swagger
 * /scene/{id}:
 *   put:
 *     summary: Update a scene
 *     tags: [scene]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the scene.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                club_id:
 *                    type: integer
 *                    required: true
 *                venue_id:
 *                    type: integer
 *                    required: true
 *                title:
 *                    type: string
 *                    required: true
 *                event_date:
 *                    type: string
 *                    required: true
 *                description:
 *                    type: string
 *                    required: true
 *                cost:
 *                    type: string
 *                    required: true
 *                start_at:
 *                    type: string
 *                    format: date-time
 *                    required: true
 *                end_at:
 *                    type: string
 *                    format: date-time
 *                    required: true
 *     responses:
 *       200:
 *         description: Updates the scene object.
 */
scene.route("/:id").put(
  [
    body('club_id').isInt(),
    body('venue_id').isInt(),
    body('title').isString(),
    body('event_date').isString(),
    body('cost').isString(),
    body('start_at').isString(),
    body('end_at').isString(),
  ],
  validationUtils.validate,
  sceneController.updateScene)

/**
 * @swagger
 * /scene/{id}:
 *  delete:
 *    summary: Delete a scene by ID
 *    tags: [scene]
 *    parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the scene.
 *    responses:
 *      204:
 *        description: Deletes a single scene.
 */
scene.route("/:id").delete(sceneController.deleteScene)