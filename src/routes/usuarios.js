const { Router } = require('express');
const router = Router();
const _ =require('underscore');
const fs= require('fs');

//const usuarios= require('../sample.json');
const usuariosJson= fs.readFileSync('./src/sample.json', 'utf-8');
let usuarios= JSON.parse(usuariosJson);

router.get('/', (req, res)=>{
    res.json(usuarios);
});

router.get('/:json_id', (req,res) =>{
    const { json_id } = req.params;
    _.each(usuarios, (usuario, i)=>{
        if (usuario.json_id==json_id){
            res.json(usuario);
        }
    })
})

router.post('/', (req, res) =>{
    const { name, lastname, email, phone } = req.body;
    if ( name && lastname && email && phone) {
        const id = Object.keys(usuarios).length + 1;
        const json_id = JSON.stringify(id);
        const nuevoUsuario= {...req.body, json_id};
        usuarios.push(nuevoUsuario); 
        const json_usuarios= JSON.stringify(usuarios)
        res.json(json_usuarios);
        fs.writeFileSync('./src/sample.json', json_usuarios ,'utf-8')
    } else {
        res.status(500).json({error: "There was an eror"});
    };
    
});

router.put('/:json_id', (req, res)=>{
    const { json_id } = req.params;
    const { name, lastname, email, phone } = req.body;
    if ( name && lastname && email && phone) {
        _.each(usuarios, (usuario, i)=>{
            if(usuario.json_id== json_id){
                usuario.name= name;
                usuario.lastname= lastname;
                usuario.email=email;
                usuario.phone= phone;
                const json_usuarios= JSON.stringify(usuarios);
                fs.writeFileSync('./src/sample.json', json_usuarios ,'utf-8');
            }
        });
        res.json(usuarios);
    } else {
        res.status(500).json({error: "There was an error"});
    }

})

router.delete('/:json_id', (req,res)=>{
    const { json_id } = req.params;
    _.each(usuarios, (usuario, i)=>{
        if(usuario.json_id == json_id){
            usuarios.splice(i, 1);
            const json_usuarios= JSON.stringify(usuarios);
            fs.writeFileSync('./src/sample.json', json_usuarios ,'utf-8');
            res.json(usuarios);
        };
    });
});

module.exports= router;
