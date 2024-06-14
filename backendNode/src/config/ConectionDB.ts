import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: 20142,
    database: 'railway',
};
const ConectionDB = new Pool(config);

export default ConectionDB;
