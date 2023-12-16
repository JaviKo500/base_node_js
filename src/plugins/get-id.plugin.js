const { v4: uuidv4 } = require('uuid');

const getUuId = () => {
    return uuidv4();
}

module.exports = {
    getUuId
};