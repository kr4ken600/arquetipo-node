import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @implements {IUserModelService}
 */
const RoleService: IRoleService = {
    /**
     * @returns {Promise < RoleTo >}
     * @memberof UserFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        let roleModel = await Role.create(role);
        return roleModel;
    }
}

export default RoleService;