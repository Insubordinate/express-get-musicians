const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

app.use(express.json())
app.use(express.urlencoded())

//TODO

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})

app.get('/musicians',async(req,res)=>{
    res.json(await Musician.findAll())
})


app.get('/musicians/:id',async(req,res)=>{
    res.json(await Musician.findByPk(req.params.id))
})



// Handle POST


app.post('/musicians',async(req,res)=>{
    await Musician.create(req.body)
    res.json(await Musician.findAll())
})



// Handle PUT
app.put('/musicians/:id',async(req,res)=>{
    await Musician.update(req.body,{where:{id:req.params.id}})
    res.json(await Musician.findAll())
})

//HANDLE DELETE

app.delete('/musicians/:id',async(req,res)=>{
    await Musician.destroy({where:{id:req.params.id}})
    res.json(await Musician.findAll())
})