import AppClient from "../../client";
import { AppError } from "../../error/appErro";
import { IUser } from "../../interface/userInterface"
import { getUsersWithWhere } from "../../uteis/textQuery";

export const GetUserService = async (user: IUser): Promise<IUser> => {
    console.log(getUsersWithWhere(user.email, user.name, user.cellphone));

    const resultw = getUsersWithWhere(user.email, user.name, user.cellphone)

    try {
        const res = await AppClient.query(resultw.text, resultw.values);

        return res.rows as unknown as IUser;
    } catch (error: Error | unknown) {
        console.log(error);

        throw new AppError("Erro ao encontrar o usuário", 404);
    };
}