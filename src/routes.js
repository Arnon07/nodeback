// import { Router } from 'express';
import express from 'express';
import HouseController from './controllers/HouseController';
import SessionController from './controllers/SessionController';
var app = express();



app.post('/sessions', SessionController.store);
app.post('/houses', HouseController.store);

export default app;