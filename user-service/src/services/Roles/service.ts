import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IUserModelService}
 */
const RoleService: IRoleService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return Role.findAll();
    },
    /**
     * @returns {Promise < RoleTo >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        let roleModel = await Role.create(role);
        return roleModel;
    },
    /**
     * @returns {Promise < boolean >}
     * @memberof RoleFacade
     */
    async deleteR(id: number): Promise<boolean> {
        let res: boolean = false;
        await Role.destroy({ where: { id: id } })
            .then((data) => {
                if(data < 1){
                    throw new ParametersError("El rol no existe");
                }

                res = true
            });

        return res;
    },

    /**
     * @returns {Promise < RoleTo >}
     * @memberof RoleFacade
     */
    async update(id: number, user: RoleTo): Promise<RoleTo> {
        const [rows, userModel] = await Role.update(user, { where: { id: id }  });
        
        if(rows <= 0){
            throw new ParametersError("El rol no existe");
        }

        const RoleTo:RoleTo[] = await Role.findAll({where: {id: id}})

        return RoleTo[0];
    },
}

export default RoleService;