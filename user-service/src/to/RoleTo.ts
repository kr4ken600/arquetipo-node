/**
 * @export
 * @class RoleTo
 *
 * @swagger
 * components:
 *  schemas:
 *    RoleTo:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: type of role
 *          example: admin
 */
export class RoleTo {
    id?: number;
    name?: string;

    constructor(id: number, email: string) {
        this.id = id;
    }
}