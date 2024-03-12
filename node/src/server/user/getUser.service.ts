import AppClient from "../../client";
import { AppError } from "../../error/appErro";
import { IUser } from "../../interface/userInterface"
import { getUsersWithWhere } from "../../uteis/textQuery";

export const GetUserService = async (user: IUser): Promise<IUser> => {

    const resulte = getUsersWithWhere(user.email, user.name, user.cellphone)

    try {
        const res = await AppClient.query(resulte.text, resulte.values);

        return res.rows as unknown as IUser;
    } catch (error: Error | unknown) {
        throw new AppError("Erro ao encontrar o usuário", 404);
    };
}