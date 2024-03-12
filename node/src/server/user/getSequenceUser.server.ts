import AppClient from "../../client";
import { AppError } from "../../error/appErro";
import { IUser } from "../../interface/userInterface"

export const GetSequenceUserService = async (): Promise<IUser> => {
    try {
        const res = await AppClient.query('SELECT name, email, cellphone, coordinate, coordinate[0] as x, coordinate[1] as y FROM "user" ORDER BY x ASC, y');
        return res.rows as unknown as IUser;
    } catch (error) {
        throw new AppError("Erro ao encontrar o usuário", 404);
    };
}