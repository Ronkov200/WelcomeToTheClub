import express from 'express'
import router from '../server/routers/router.js'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('ZBS')
})

app.use('/', router)

app.listen(port, () => {
    console.log('rabotaet')
})