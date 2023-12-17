import { buildMakePerson } from '../../src/js-foundation/05-factory';
describe('05-factory.test', () => {
    const getUuId = () => '1334';
    const getAge = () => 25;
    test( 'buildMakePerson should return a function', () => {
        const personOptions = {
            getUuId,
            getAge
        };
        const makePerson = buildMakePerson(personOptions);

        expect( typeof makePerson ).toBe( 'function' );
    });

    test( 'makePerson should return a person', () => {
        const personOptions = {
            getUuId,
            getAge
        };
        const makePerson = buildMakePerson( personOptions );
        const joeDone = makePerson( { name: 'Joe Done', birthDate: '1998-07-04' } );

        expect( joeDone ).toEqual({
            id: '1334',
            name: 'Joe Done',
            birthDate: '1998-07-04',
            age:25,
        })
    });
});