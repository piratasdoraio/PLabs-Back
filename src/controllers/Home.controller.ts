import { Response, Request } from "express";

export class HomeController {

    async home(_req: Request, res: Response): Promise<Response> {
        return res.status(200).json({"message":"Bem-Vindo a página inicial"});
    }


}


