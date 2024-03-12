import { Router } from "express";
import { CreateUserController, GetUserController, GetUserSequenceController } from "../controller/user/User.controller";

const routerUser = Router()

routerUser.post("", CreateUserController)
routerUser.get("", GetUserController)
routerUser.get("/sequence/", GetUserSequenceController)

export default routerUser