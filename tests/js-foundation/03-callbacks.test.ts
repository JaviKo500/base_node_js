import { getUserById } from '../../src/js-foundation/03-callbacks';
describe('03-callbacks.test', () => {
    test( 'getUserById should return an error if user does not exist', () => {
        const id = 10;
        getUserById( id, ( err: string, user: any ) => {
            expect( user ).toBeUndefined();
            expect( err ).toBe(`User not fount with id ${id}`)
        });
    });

    test( 'getUserById should return a john Doe', (done) => {
        const id = 1;
        getUserById( id, ( err?: string, user?: any ) => {
            
            // expect( user.id ).toBe(id);
            // expect( user.name ).toBe('john Doe');
            expect( user ).toEqual({
                id: 1,
                name: 'john Doe'
            });
            expect( err ).toBeNull();
            done();
        });
    });
});