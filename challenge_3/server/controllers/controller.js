const db = require('../../database/dbMethods.js');

module.exports = {
    addInfo((req, res) => {
        db.sendInfotoDB(req, res);
    }
}