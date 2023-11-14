import express, { json } from 'express';

const app = express();
const PORT = 3000;
app.use(json())


app.get('/api/users/currentUser', (req, res) => {
    console.log('Request received in current User');

    res.send('Hi there nice To meet You ...')
})


app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT} !!!`);
})