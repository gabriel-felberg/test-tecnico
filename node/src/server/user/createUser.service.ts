import AppClient from "../../client";
import { AppError } from "../../error/appErro";
import { IUser } from "../../interface/userInterface";

export const CreateUserService = async(user:IUser):Promise<IUser> => {
    console.log(user.name, "oii");
    
    if (!user.email && !user.name && !user.cellphone && !user.coordinate) {
        throw new AppError("existem campos faltantes", 301);
    }
    try {
        const res = await AppClient.query("INSERT INTO \"user\"(email, name, cellphone, coordinate) VALUES ($1, $2, $3, $4) RETURNING *", [user.email, user.name, user.cellphone, user.coordinate]);
        console.log(res.rows[0]);
        
        return res.rows[0] as IUser;
    } catch (error) {
        console.log(error);
        
        throw new AppError("Erro ao criar usuário", 401);
    };
}