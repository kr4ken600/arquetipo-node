import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {
    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleFacade
     */
    create(role: RoleTo): Promise<RoleTo>;
    /**
     * @returns {Promise<void>}
     * @memberof IUserFacade
     */
    publish(id: number): Promise<void>;
    /**
     * @returns {Promise<void>}
     * @memberof IUserFacade
     */
    consumer(id: number): Promise<boolean>;
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IUserFacade
     */
    update(id:number, user: RoleTo): Promise<RoleTo>;
}