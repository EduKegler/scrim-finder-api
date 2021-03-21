import { QueryResult } from "pg";
import { pool } from "../../config";
import { IMatch } from "./match.interface";

export const getMatchesService: Promise<QueryResult<IMatch>> = pool.query('SELECT * FROM matches');