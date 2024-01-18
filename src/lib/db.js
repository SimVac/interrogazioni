import { config } from 'dotenv';
config();

import { createConnection } from 'mysql2/promise';

async function query(sql, params) {
    const connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
    const [results, ] = await connection.execute(sql, params);
  
    return results;
}
  
export default {
  query
}