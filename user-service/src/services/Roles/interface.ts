import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {
    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;
    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
    create(role: RoleTo): Promise<RoleTo>;
    /**
     * @returns {Promise<boolean>}
     * @memberof IUserService
     */
    deleteR(id: number): Promise<boolean>;
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IUserService
     */
    update(id:number, user: RoleTo): Promise<RoleTo>;
}