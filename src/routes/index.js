const { Router } = require('express');
const router = Router();

router.post('/test', (req, res)=>{
    const datos = JSON.stringify(req.body);
    const data = {
        "usuario": "abc",
        "password": "123"
    };
    if (datos == data){
        res.json(datos);
        res.status(200).json({"status": "OK"});
    };
    res.json(data);
})

module.exports= router;