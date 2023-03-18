import RoleFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { RoleTo } from '../../to/RoleTo';
import { logger } from '../../config/logger/logger';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function save(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        let role: RoleTo = {...req.body};
        logger.info("(%s) - Request post: %s","RoleRouter.ts", JSON.stringify(role));
        role = await RoleFacade.create(role);
        res.status(HttpStatusCode.OK).json(role);
    } catch (error) {
        next(error);
    }
}