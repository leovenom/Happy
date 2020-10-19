import express from  'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
// REQ - requisição / RES - resposta
// Rota = conjunto
// Recurso = usuário
// Metodos HTTP = GET (buscar informação), POST (criando nova informação), PUT (editar informação), DELETE (deletar informação)
// Parâmentros 
// Query Params: http://localhost:3333/users?search=leonardt&
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// body: http://localhost:3333/users


app.listen(3333);

// Driver nativo (sqlite3), Query builder (knex.JS), ORM (object relational Mapping)