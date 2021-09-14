import superteste from "supertest";
import app from "../src/app";
const request = superteste(app);

describe("Testando o Home controller", () => {
    it("Teste do metodo home", async () => {
        const res = await request.get("/");
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Bem-Vindo a página inicial");
    })
})