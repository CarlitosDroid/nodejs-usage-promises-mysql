/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';

var mysql = require('mysql');

module.exports.connect = (connectionSettings) => {

    return new Promise((resolve, reject) => {

        if (!connectionSettings.host) throw new Error("A host must be specified.");
        if (!connectionSettings.user) throw new Error("A user must be specified.");
        if (!connectionSettings.password) throw new Error("A password must be specified.");
        if (!connectionSettings.database) throw new Error("A database must be specified.");
        if (!connectionSettings.port) throw new Error("A port must be specified.");

        let connection = mysql.createConnection({
            host: process.env.DATABASE_HOST || '127.0.0.1',
            user: 'users_service',
            password: '123',
            database: 'CHIRINOS',
            port: 3306
        });

        resolve(connection);
    });
};