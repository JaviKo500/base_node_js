const axios = require('axios');

const httpClient = {
    get: async ( url ) => {
        // const resp = await fetch( url );
        // return await resp.json();
        const { data } = await axios.get(url);

        return data;
    },
    post: async ( url, body) => {},
    put: async ( url, body) => {},
    delete: async ( url) => {},

}
module.exports = {
    httpClient
}