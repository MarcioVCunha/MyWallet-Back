import express from 'express';
import cors from 'cors';
import { createAccount } from './controllers/createAccount.js';
import { logIn } from './controllers/logIn.js';
import { getUserInfo } from './controllers/getUserInfo.js';
import { getUserTransaction } from './controllers/getUserTransaction.js';
import { addTransaction } from './controllers/addTransaction.js';
import { auth } from './middleware/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sign-up', createAccount);
app.post('/login', logIn);

app.get('/user-info', auth, getUserInfo);
app.get('/user-transaction', auth, getUserTransaction);

app.post('/add-transaction', auth, addTransaction);

export default app;