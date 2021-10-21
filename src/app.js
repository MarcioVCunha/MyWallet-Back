import express from 'express';
import cors from 'cors';
import { createAccount } from './controllers/createAccount.js';
import { logIn } from './controllers/logIn.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', createAccount);

app.post("/login", logIn);

app.listen(4000);