import * as Kafka from "../../config/stream/kafka";
import { Utils } from "../../commons/utils/Utils";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { IRoleFacade } from "./interface";


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        let User = await RoleService.findAll();
        return User;
    },
    /**
     * @returns {Promise < RoleTo >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name})
        let Role = await RoleService.create(role);
        return Role;
    },
    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async publish(id: number): Promise<void> {
        await Kafka.send('role-service-topic', `${id}`);        
    },
    /**
     * @returns {Promise < boolean >}
     * @memberof UserFacade
     */
    async consumer(id: number): Promise<boolean> {
        return await RoleService.deleteR(id);
    },
    /**
     * @returns {Promise < RoleTo >}
     * @memberof UserFacade
     */
    async update(id:number, user: RoleTo): Promise<RoleTo> {
        return await RoleService.update(id, user);
    },
}

export default RoleFacade;