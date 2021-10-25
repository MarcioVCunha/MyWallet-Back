import app from '../src/app.js';
import supertest from 'supertest';
import connection from '../src/database/databse.js'

describe("POST /sign-up", () => {
    it("returns 201 if user was created", async () => {
        const body = {
            name: 'Marcio',
            email: 'marcio@teste3.com',
            password: 'Marcio123$',
            passwordConfirmation: 'Marcio123$'
        };

        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;

        expect(status).toEqual(201);
    })
})

describe("POST /login", () => {
    it("return 200 for login done succesfully", async () => {
        const Body = {
            email: 'marcio@teste3.com',
            password: 'Marcio123$',
        }

        const Result = await supertest(app).post("/login").send(Body);
        const status = Result.status;

        expect(status).toEqual(200);
    })
})

describe("GET /user-info", () => {
    it("return 200 if token is right", async () => {
        const Result = await supertest(app).get("/user-info").set("authorization", "Bearer 38cd0ea9-ee3d-40f9-bd5a-db1341e69f87");
        const status = Result.status;

        expect(status).toEqual(200);
    })
})

afterAll(async () => {
    await connection.query(`DELETE FROM users WHERE email = 'marcio@teste3.com';`);
    await connection.query(`DELETE FROM sessions WHERE "userId" != 34;`);

    connection.end();
});