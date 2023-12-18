// const getAgePlugin = require('get-age');

export const getAge = ( birthDate: string ) => {
    if (!birthDate) {
        throw new Error('birthDate is required');
    }

    // return getAgePlugin(birthDate);
    // console.log('<--------------- JK Get-age.plugin --------------->');
    // console.log({currentYear: new Date().getFullYear(), year: new Date(birthDate).getFullYear()});
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}
