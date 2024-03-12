import { Request, Response } from "express";
import { CreateUserService } from "../../server/user/createUser.service";
import { GetUserService } from "../../server/user/getUser.service";
import { IUser } from "../../interface/userInterface";
import { GetSequenceUserService } from "../../server/user/getSequenceUser.server";

async function CreateUserController(req: Request, res: Response) {
    const user = await CreateUserService(req.body)
    return res.status(200).json(user)
}

async function GetUserController (req: Request, res: Response)  {
    const getUser:IUser = req.query as unknown as IUser
    const users = await GetUserService(getUser)
    return res.status(200).json(users); 
}

async function GetUserSequenceController (req: Request, res: Response)  {
    const users = await GetSequenceUserService()
    return res.status(200).json(users); 
}

export { CreateUserController, GetUserController, GetUserSequenceController };
