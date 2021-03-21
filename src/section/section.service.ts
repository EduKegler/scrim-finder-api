import { QueryResult } from "pg";
import { pool } from "../../config";
import { ISection } from "./section.interface";

export const getSectionsService: Promise<QueryResult<ISection>> = pool.query('SELECT * FROM sections');