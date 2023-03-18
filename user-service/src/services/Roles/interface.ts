import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {
    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
    create(role: RoleTo): Promise<RoleTo>;
}