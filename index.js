import express  from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
<<<<<<< HEAD
const PORT = 5000;
=======
const PORT = 3000;
>>>>>>> footer

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`))