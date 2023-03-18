import * as Kafka from "../../config/stream/kafka";
import { Utils } from "../../commons/utils/Utils";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let User = await UserService.findAll();
        return User;
    },
    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        Utils.required({email: user.email});
        await UserService.validateEmail(user.email);
        await UserService.validateExisteUser(user.email);
        let User = await UserService.create(user);
        return User;
    },
    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async publish(id: number): Promise<void> {
        await Kafka.send('user-service-topic', `${id}`);        
    },
    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async consumer(id: number): Promise<void> {
        await UserService.deleteU(id);     
    }
}

export default UserFacade;