import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleFacade
     */
    create(role: RoleTo): Promise<RoleTo>;
}