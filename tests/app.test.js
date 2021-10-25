import app from '../src/app.js';
import supertest from 'supertest';

describe("POST /sign-up", () => {
    it("returns 201 for valid params", async () => {
        const body = {
            name: 'Marcio',
            email: 'marcio@teste3.com',
            password: 'Marcio123$',
            passwordConfirmation: 'Marcio123$'
        };

        const result = await supertest(app).post("/receitas").send(body);
        const status = result.status;

        expect(status).toEqual(201);
    })
})