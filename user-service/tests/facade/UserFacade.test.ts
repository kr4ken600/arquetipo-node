process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe('UserFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        User.create({
        id: 1,
        name: 'test',
        email: "test@axity.com",
        });
    });

    describe('FindAll', () => {
       it('should return one user', async () => {
            const user: any[] = await UserFacade.findAll();
            expect(1).equal(user.length);
       });
    });
  
    describe('Create', () => {
        it('should create one user', async () => {
            let userTo: UserTo = {
                name: "Yonatan",
                email: "yonatan@axity.com"
            }
            const user: UserTo = await UserFacade.create(userTo);
            expect(user.name).equal("Yonatan");
        });
    });

    describe('Create error user existing', () => {
        it('should return error', async () => {
            let userTo: UserTo = {
                name: "Yonatan",
                email: "yonatan@axity.com"
            }
            try {
                await UserFacade.create(userTo);
            } catch (error) {
                expect(error).instanceOf(ParametersError);
            }
        });
    });

    describe('Create error not atribute', () => {
        it('should return error', async () => {
            let userTo: UserTo = {
                name: "Yonatan",
                email: ""
            }
            try {
                await UserFacade.create(userTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El atributo email es requerido");
            }
        });
    });

    describe('Create error incorrect email', () => {
        it('should return error', async () => {
            let userTo: UserTo = {
                name: "Yonatan",
                email: "hola@"
            }
            try {
                await UserFacade.create(userTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El correo es invalido");
            }
        });
    });
    
    describe('Update', () => {
        it('should return user', async () => {
            let id = 1;
            let userTo:UserTo = {
                name: "Ortiz",
                email: "yonatan@axity.com"
            };
            let user:UserTo = await UserFacade.update(id,userTo);
            expect(user.name).equal('Ortiz');
        });
    });

    describe('Update error invalid user', () => {
        it('should return error', async () => {
            try {
                let id = 50;
                let userTo:UserTo = {
                    name: "Ortiz",
                    email: "yonatan@axity.com"
                };
                await UserFacade.update(id,userTo);
            } catch (error:any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El usuario no existe");
            }
        });
    });

    
    describe('Delete', () => {
        it('shoul return true', async () => {
            let id = 2;
            const res: boolean = await UserFacade.consumer(id); 
            expect(res).equal(true);
        });
    });
    
    describe('Delete error invalid user', () => {
        it('shoul return error', async () => {
            try {
                let id = 10;
                await UserFacade.consumer(id);     
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equal("El usuario no existe");
            }
            
        });
    });
}); 