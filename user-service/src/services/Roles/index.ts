import { RoleTo } from '../../to/RoleTo';
import RoleService from './service';

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
    return await RoleService.create(role);
}