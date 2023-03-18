import { UserTo } from '../../to/UserTo';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateEmail(email: string): Promise<void> {
    return await UserService.validateEmail(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExisteUser(email: string): Promise<void> {
    return await UserService.validateExisteUser(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise<UserTo> {
    return await UserService.create(user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function deleteU(id: number): Promise<void> {
    return await UserService.deleteU(id);
}