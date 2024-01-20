import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from './env';

import { createConnection } from 'mysql2/promise';

async function query(sql, params) {
    const connection = await createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
      });
    const [results, ] = await connection.execute(sql, params);
    return results;
}
 
export default {
  query
}