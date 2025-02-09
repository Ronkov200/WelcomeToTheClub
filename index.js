import express from 'express'
import router from '../WelcomeToTheClub/routers/ExampleRouter.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('ZBS')
})

app.use('/', router);

app.listen(port, () => {
    console.log('rabotaet')
})