const getAgePlugin = require('get-age');

export const getAge = ( birthDate: string ) => {
    if (!birthDate) {
        throw new Error('birthDate is required');
    }

    return getAgePlugin(birthDate);
}
