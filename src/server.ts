import 'reflect-metadata';
import express from 'express';
import Router from './routes/routes';
import './database/index';


const app = express();

app.use(express.json());
app.use(Router);


app.listen(3333, () => console.log('Server started at http://localhost:3333'))


