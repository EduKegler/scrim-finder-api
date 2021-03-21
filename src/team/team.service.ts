import { QueryResult } from "pg";
import { pool } from "../../config";
import { ITeam } from "./team.interface";

export const getTeamsService: Promise<QueryResult<ITeam>> = pool.query('SELECT * FROM teams');