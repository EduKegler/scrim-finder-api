import { getTeamsService } from './team.service'
import { Request, Response } from 'express';

export const getTeams = async (_: Request, res: Response) => {
    try {
        const data = await getTeamsService;
        res.send(data.rows);
    } catch (error) {
        throw Error(error);
    }
}