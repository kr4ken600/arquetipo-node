import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka"
import { UserTo } from "../../to/UserTo";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return User.findAll();
    },

    /**
     * @returns {Promise < void >}
     * @memberof UserFacade
     */
    async validateEmail(email: string): Promise<void> {
        let compare = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!compare.test(email)) {
            throw new ParametersError("El correo es invalido");
        }
    },

    /**
     * @returns {Promise < void >}
     * @memberof UserFacade
     */
    async validateExisteUser(email: string): Promise<void> {
        let user = await User.findAll({
            where: {
                email: email
            }
        });

        if (user.length > 0) {
            throw new ParametersError("El usuario ya existe");
        }
    },

    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        let userModel = await User.create(user);
        return userModel;
    },

    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async deleteU(id: number): Promise<void> {
        await User.destroy({ where: { id: id } });
    }
}

export default UserService;