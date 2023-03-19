import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;
    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserFacade
     */
    create(user: UserTo): Promise<UserTo>;
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
     * @returns {Promise<UserTo>}
     * @memberof IUserFacade
     */
    update(id:number, user: UserTo): Promise<UserTo>;
}