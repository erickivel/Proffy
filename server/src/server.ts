import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// http://localhost:3333/users

// Methods:
// GET: search and list information
// POST: create a new information
// PUT: update existent information
// DELETE: delete existent information

// Request Body : data for creating or updating records
// Route Params: identifys wich resource I want update or delete (/:id)
// Query Params: pagination, filters, sorting

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);