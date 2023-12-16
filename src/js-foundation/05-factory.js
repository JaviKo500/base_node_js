// const { getAge, getUuId } = require('../plugins');

// const obj = { name: 'jane', birthDate: '1998-07-04' };

const buildMakePerson = ({ getUuId, getAge }) => {
    return ( { name, birthDate } ) => {
        return {
            id: getUuId(),
            name,
            birthDate,
            age: getAge( birthDate )
        };
    };
}


// const jane = buildPerson( obj );


// console.log('<--------------- JK 05-factory --------------->');
// console.log(jane);

module.exports = {

    buildMakePerson,

}