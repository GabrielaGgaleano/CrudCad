const express = require ('express');
const app = express();

app.get("/", async (req,res)=>{
    res.send("Pagina Inicial");
});

app.listen(80,()=>{
    console.log("Servidor iniciado na porta 80: http://localhost:80");

});