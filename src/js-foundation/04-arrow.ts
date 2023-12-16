interface User {
    id: number,
    name: string
}

const users: User[]  = [
    {
        id: 1,
        name: 'john Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

export const getUserById = ( id: number, callback: Function ) => {
    const user = users.find( user => user.id === id);

    user
        ? callback( null, user )
        : callback( `User not fount with id ${id}` );
}
