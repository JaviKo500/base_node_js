const users = [
    {
        id: 1,
        name: 'john Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

const getUserById = ( id, callback ) => {
    const user = users.find( user => user.id === id);
    if (  !user ) {
        return callback( `User not fount with id ${id}` );
    }
    return callback( null, user );
}


module.exports = { getUserById  };