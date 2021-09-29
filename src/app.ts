import express, { Application } from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import  swaggerDocument from "./swagger.json";
//import  * as OpenApiValidator  from "express-openapi-validator";
//import { OpenAPIV3 } from "express-openapi-validator/dist/framework/types";

export default class ServerConfig {
    private static serverInstance: ServerConfig;
    private app: Application;
    
    private constructor() {
        this.app = express();
        this.routeConfig();
        this.swaggerDocumentation();
    }

    static getServerInstance(): ServerConfig {
        if(!ServerConfig.serverInstance) {
            ServerConfig.serverInstance = new ServerConfig();
        }
        return ServerConfig.serverInstance;
    };

    getApp(): Application {
        return this.app;
    }

    private async swaggerDocumentation(): Promise<void> {
        this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        //this.app.use(OpenApiValidator.middleware({
        //    apiSpec: swaggerDocument as OpenAPIV3.Document,
        //    validateRequests: true,
        //    validateResponses: true
        //}));
    }

    private routeConfig(): void {
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(routes);
    }

    server(): void {
        this.app.listen(3000, () => {
            console.log("servidor rodando em http://localhost:3000");
        })
    }
}








