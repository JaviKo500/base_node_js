import { getUuId } from '../../src/plugins/get-id.plugin';
describe('Get-id.plugin.test', () => {
    test( 'getId should return a UUID', () => {
        const uuid = getUuId();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);      
    });
});