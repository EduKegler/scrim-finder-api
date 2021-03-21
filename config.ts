import * as dotenv from "dotenv";
import * as pg from "pg";

dotenv.config();
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new pg.Pool({ connectionString })

export { pool };