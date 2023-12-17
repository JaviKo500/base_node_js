import { characters } from '../../src/js-foundation/02-destructuring';
describe('02-destructuring.test', () => {
    test( 'characters should contain flash and superman', () => {
        expect( characters ).toContain('flash');
        expect( characters ).toContain('Superman');
    });

    test( 'first character should be flash and second Superman', () => {
       const [ flash, superman ] = characters;
       expect( flash ).toBe('flash');
       expect( superman ).toBe('Superman');
    });
});