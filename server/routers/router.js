import { Router } from 'express';


const router = new Router();

router.get('/pogoda', (req,res) => {
    res.send('Хорошая погода нынче')
});

router.get('/login', (req,res) =>{
    const user = {
        name: "Oleg",
        age: "20"
    }
    res.json(user)
})

router.post('/reg', (req,res) => {
    res.send('123')
})

export default router;