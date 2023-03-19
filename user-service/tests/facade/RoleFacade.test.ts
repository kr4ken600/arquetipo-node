process.env.NODE_ENV = 'test'

import { expect } from "chai";
import RoleFacade from '../../src/facade/Roles/facade';
import { db } from '../../src/config/connection/database';
import { RoleTo } from "../../src/to/RoleTo";
import { ParametersError } from "../../src/config/error";

describe('RoleFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
    });

    describe('Create', () => {
        it('should create one Role', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            const role: RoleTo = await RoleFacade.create(roleTo);
            expect(role.id).to.not.be.null;
        });
    });

    describe('Create error Role existing', () => {
        it('should return error', async () => {
            let RoleTo: RoleTo = {
                name: ""
            }
            try {
                await RoleFacade.create(RoleTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El atributo name es requerido");
            }
        });
    });
}); 