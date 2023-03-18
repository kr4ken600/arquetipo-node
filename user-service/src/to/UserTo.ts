/**
 * @export
 * @class UserTo
 *
 * @swagger
 * components:
 *  schemas:
 *    UserTo:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: name of user
 *          example: Yonatan
 *        email:
 *          type: string
 *          description: email of user
 *          example: yonatan@axity.com
 */
export class UserTo {
    id?: number;
    name?: string;
    email: string;

    constructor(id: number, email: string) {
        this.id = id;
        this.email = email;
    }
}