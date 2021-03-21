import { QueryResult } from "pg";
import { pool } from "../../config";
import { IUser } from "./user.interface";

export const getUsersService: Promise<QueryResult<IUser>> = pool.query('SELECT * FROM Users');