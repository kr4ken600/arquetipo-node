process.env.NODE_ENV = 'test'

import { expect } from "chai";
import RoleFacade from '../../src/facade/Roles/facade';
import { db } from '../../src/config/connection/database';
import { RoleTo } from "../../src/to/RoleTo";
import { ParametersError } from "../../src/config/error";
import Roles from "../../src/models/Role.model";

describe('RoleFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        Roles.create({
            id: 1,
            name: "admin"
        });
    });

    describe('FindAll', () => {
        it('should return one user', async () => {
             const user: any[] = await RoleFacade.findAll();
             expect(1).equal(user.length);
        });
     });

    describe('Create', () => {
        it('should create one Role', async () => {
            let roleTo: RoleTo = {
                name: "client",
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

    describe('Update', () => {
        it('should return role',async () => {
            let id = 2;
            let roleTo: RoleTo = {
                name: "userClient"
            };
            let role:RoleTo = await RoleFacade.update(id,roleTo);
            expect(role.name).equal('userClient');
        });
    });

    describe('Update error invalid role', () => {
        it('should return role',async () => {
            try {
                let id = 7;
                let roleTo: RoleTo = {
                    name: "userClient"
                };
                
                await RoleFacade.update(id,roleTo);
            } catch (error: any) {
                expect(error).instanceof(ParametersError);
                expect(error.message).equal('El rol no existe');
            }
            
        });
    });

    describe('Delete', () => {
        it('shoul return true', async () => {
            let id = 2;
            const res: boolean = await RoleFacade.consumer(id); 
            expect(res).equal(true);
        });
    });
    
    describe('Delete error invalid user', () => {
        it('shoul return error', async () => {
            try {
                let id = 10;
                await RoleFacade.consumer(id);     
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El rol no existe");
            }
            
        });
    });
}); 