import express, { json } from 'express';
import 'express-async-errors'
import { authRouter } from './routes';
import { errorHandler } from './middlewares/error-middleware';
import { NotFoundError } from './errors';

const app = express();
const PORT = 3000;
app.use(json())
// TODO in the course 
/**
 * email , password validate 
 * make sure to return the validation error 
 * test the validation using postman
 * 
 */

// TODO 
// use passport 
// use express-validator 
// use Sequelize as a ORM
// use postgres as a DB 


app.use(authRouter)


// 404 handler 
app.all('*', async () => { throw new NotFoundError() })

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Running on port ${PORT} !`);
})