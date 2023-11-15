import express, { json } from 'express';
import { authRouter } from './routes';
import { errorHandler } from './middlewares/error-middleware';

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

app.use('/', (req, res) => {
    res.send('Welcome to the Auth service ')
}
)




app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Running on port ${PORT} !`);
})