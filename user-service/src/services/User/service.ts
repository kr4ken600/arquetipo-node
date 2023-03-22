import { IUserService } from "./interface";
import User from "../../models/User.model";
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
     * @returns {Promise < boolean >}
     * @memberof UserFacade
     */
    async deleteU(id: number): Promise<boolean> {
        let res: boolean = false;
        await User.destroy({ where: { id: id } })
            .then((data) => {
                if (data < 1) {
                    throw new ParametersError("El usuario no existe");        
                }
                res = true;
            });
            
        return res;
    },

    /**
     * @returns {Promise < UserTo >}
     * @memberof UserFacade
     */
    async update(id: number, user: UserTo): Promise<UserTo> {
        const [rows, userModel] = await User.update(user, { where: { id: id }  });
        
        if(rows <= 0){
            throw new ParametersError("El usuario no existe");
        }

        const userTo:UserTo[] = await User.findAll({where: {id: id}})

        return userTo[0];
    },
}

export default UserService;