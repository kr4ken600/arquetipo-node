import { RoleTo } from '../../to/RoleTo';
import RoleService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await RoleService.findAll();
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
    return await RoleService.create(role);
}

/**
 * @export
 * @returns {Promise < boolean >}
 */
export async function deleteR(id: number): Promise<boolean> {
    return await RoleService.deleteR(id);
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function update(id: number, user: RoleTo): Promise<RoleTo> {
    return await RoleService.update(id, user);
}