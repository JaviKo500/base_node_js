// const { getAge, getUuId } = require('../plugins');

// const obj = { name: 'jane', birthDate: '1998-07-04' };

interface BuildMakerPersonOptions{
    getUuId: ( ) => string, 
    getAge: ( birthDate: string ) => number
}

export const buildMakePerson = ({ getUuId, getAge }: BuildMakerPersonOptions) => {
    return ( { name, birthDate }: { name: string, birthDate: string } ) => {
        return {
            id: getUuId(),
            name,
            birthDate,
            age: getAge( birthDate )
        };
    };
}
