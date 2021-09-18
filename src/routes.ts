import {Router} from "express";
import { HomeController } from "./controllers/Home.controller";

const routes = Router();

routes.get("/", new HomeController().home);

export default routes;