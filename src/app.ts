
// const { getAge, getUuId } = require('./plugins');
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');

// import { buildLogger } from "./plugins/logger.plugin";

// console.log('<--------------- JK App --------------->');
// console.log(emailTemplate);
//  const { getUserById } = require('./js-foundation/04-arrow');

//  const id = 2;
//  getUserById( id , ( error, user ) => {
    //     if (error) {
        //         throw new Error(error);
        //     }
        
        //     console.log('<--------------- JK App --------------->');
        //     console.log({ user });
        //  });
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const obj = { name: 'jane', birthDate: '1998-07-04' };

// const makePerson = buildMakePerson( { getUuId, getAge } );

// const jane = makePerson( obj );

// console.log('<--------------- JK App --------------->');
// console.log(jane);
// getPokemonById(1)
//     .then( ( pokemon ) => {
//         console.log('<--------------- JK App --------------->');
//         console.log(pokemon);
//     })
//     .catch( ( err ) => {
//         console.log('<--------------- JK App --------------->');
//         console.log(err);
//     });

// const logger = buildLogger( 'app.js' );
// logger.log('hello world');
// logger.error('Esto es algo malo');