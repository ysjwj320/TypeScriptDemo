/* app/config/Repository.ts */

import {ConnectionOptions, createConnection, Connection} from 'typeorm';
import {User} from '../entity/User';

export class Repository {

    static options: ConnectionOptions = {
        // type: 'oracle',
        // host: 'localhost',
        // username: 'system',
        // password: 'oracle',
        // port: 1521,
        // sid: 'xe.oracle.docker',
        'name': 'mysql',
        'type': 'mysql',
        'host': '192.168.0.79',
        'port': 3306,
        'username': 'root',
        'password': '123456',
        'database': 'snbi',
        // type: 'postgres',
        // host: 'localhost',
        // port: 5432,
        // username: 'test',
        // password: 'test',
        // database: 'test',
        // 'type': 'mssql',
        // 'host': '192.168.1.6',
        // 'username': 'sa',
        // 'password': 'admin12345',
        // 'database': 'test',
        // port: 1521,
        // type: 'sqlite',
        // database: 'temp/sqlitedb.db',
        // logger: 'file',
        // logging: ['query', 'error'],
        // logging: ['error', 'schema', 'query'],
        // maxQueryExecutionTime: 90,
        synchronize: true,
        entities: [User]
    };

    static connection : Promise<Connection> =  createConnection(Repository.options);

}