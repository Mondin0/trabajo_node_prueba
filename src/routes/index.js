const { Router } = require('express');
const router = Router();

router.get('/test', (req, res)=>{
    const data = {
        "Nombre": "Gabriel",
        "Apellido": "Mondino"
    };
    res.json(data);
})

module.exports= router;