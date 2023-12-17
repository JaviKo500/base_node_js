console.log('<--------------- JK 02-destructuring --------------->');
const { SHELL, HOME_PREFIX } = process.env;

export const characters = [ 'flash', 'Superman', 'Batman' ];

const [ _, __, batman ] = characters;
