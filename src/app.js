import express from 'express';
import cors from 'cors';
import { createAccount } from './controllers/createAccount.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', createAccount)

app.listen(4000);