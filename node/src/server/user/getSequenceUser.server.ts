import AppClient from "../../client";
import { AppError } from "../../error/appErro";
import { IUser } from "../../interface/userInterface"
import { getUsersWithWhere } from "../../uteis/textQuery";
// import getUsersWithWhere from "../../uteis/textQuery"


export const GetSequenceUserService = async (user: IUser): Promise<IUser> => {
    console.log(getUsersWithWhere(user.email, user.name, user.cellphone));

    const resulte = getUsersWithWhere(user.email, user.name, user.cellphone)

    try {
        const res = await AppClient.query('SELECT name, email, cellphone, coordinate, coordinate[0] as x, coordinate[1] as y FROM "user" ORDER BY x ASC, y');

        return res.rows as unknown as IUser;
    } catch (error) {
        console.log(error);

        throw new AppError("Erro ao encontrar o usuário", 404);
    };
}