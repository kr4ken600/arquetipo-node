import { Router } from 'express';
import { logger } from '../config/logger/logger';
import { RoleFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * POST method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  post:
 *    description: create one user
 *    tags: ["Roles"]
 *    requestBody:
 *      description: object user
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */

router.post('', RoleFacade.save);

/**
 * @export {express.Router}
 */
export default router;