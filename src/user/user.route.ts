import { getUsersService } from "./user.service"
import { Request, Response } from 'express';

export const getUsers = async (_: Request, res: Response) => {
    try { 
        const data = await getUsersService;
        res.send(data.rows);
    } catch (error) { 
        throw Error(error);
    }
}