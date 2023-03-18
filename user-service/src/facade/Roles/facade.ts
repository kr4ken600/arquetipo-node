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
     * @returns {Promise < RoleTo >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name})
        let Role = await RoleService.create(role);
        return Role;
    }
}

export default RoleFacade;