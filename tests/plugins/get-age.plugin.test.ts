import { getAge } from '../../src/plugins/get-age.plugin';
describe('Get-age.plugin.test', () => {
    test( 'getAge should return the age of a person', () => {
        const birthDate = '1998-07-04';
        const age = getAge(birthDate);
        expect(age).toEqual(25);
    });
    test( 'getAge should an error birthDate is required', () => {
        const birthDate = '';
        try {
            getAge(birthDate);
        } catch (error: any) {
            expect(error?.message).toBe('birthDate is required');
        }
    });

    test( 'getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthDate = '1998-07-04';
        const age = getAge(birthDate);
        expect(age).toBe(0);
        // expect(spy).toHaveBeenCalledWith({a:1});
    });
});