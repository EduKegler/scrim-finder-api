import { getMatchesService } from "./match.service"
import { Request, Response } from 'express';

export const getMatches = async (_: Request, res: Response) => {
    try { 
        const data = await getMatchesService;
        res.send(data.rows);
    } catch (error) { 
        throw Error(error);
    }
}