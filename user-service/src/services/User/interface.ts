import Users from "../../models/User.model";
import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<void>}
     * @memberof IUserService
     */
    validateEmail(email: string): Promise<void>;

    /**
     * @returns {Promise<void>}
     * @memberof IUserService
     */
    validateExisteUser(email: string): Promise<void>;

    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
    create(user: UserTo): Promise<UserTo>;

    /**
     * @returns {Promise<void>}
     * @memberof IUserService
     */
    deleteU(id: number): Promise<void>;
}