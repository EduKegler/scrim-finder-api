import { getSectionsService } from "./section.service"
import { Request, Response } from 'express';

export const getSections = async (_: Request, res: Response) => {
    try { 
        const data = await getSectionsService;
        res.send(data.rows);
    } catch (error) { 
        throw Error(error);
    }
}