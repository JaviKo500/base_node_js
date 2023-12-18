import { httpClient } from '../../src/plugins/http-client.plugin';
describe('Http-client.plugin.test', () => {
   test( 'httpClient.get() should return a string', async () => {
      const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');

      expect(data).toEqual({
         userId: expect.any(Number),
         id: expect.any(Number),
         title: expect.any(String),
         completed: expect.any(Boolean)
         });
   });

   test( 'httpClient should have POST, PUT and delete methods', () => {
      const { post, put, delete: deleteMethod } = httpClient;

      expect(typeof post).toEqual('function');
      expect(typeof put).toEqual('function');
      expect(typeof deleteMethod).toEqual('function');
   });
});