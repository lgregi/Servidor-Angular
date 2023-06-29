const express = require('express');
const app = express();
const porta = 8000

app.get('/',(req,res)=>{
    res.send('Seja bem vindo ao servidor do Lucas')
})
app.post('/dado',(req,res)=>{

    const dado1 ={
        "ID": parseInt(req.body.id),
        "email": req.body.email,
        "Nome": req.body.Nome,
        "Apelido": req.body.Apelido,
        "Senha": req.body.Senha,
        
    }  
    const dado ={
        "ID": 0,
        "email": "teste@fecap.com",
        "Nome": "Lucas Silva",
        "Apelido": "Greg",
        "Senha": "************"
        
    }     
    
    res.send(dado1)
})
app.get('/greg/teste', (req, res) => {
    res.send('Rota funcionando')
})

app.listen(porta,()=>{
    console.log(`Servidor node rodando na porta: ${porta}`)
})
