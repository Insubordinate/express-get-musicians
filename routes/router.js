const express = require('express')
const { Musician } = require('../Musician')
const router = express.Router()



router.use(express.json())
router.use(express.urlencoded())


//Get all musicians
router.get('/',async(req,res)=>{
    res.json(await Musician.findAll())
})

//Get one musician by id
router.get('/:id',async(req,res)=>{
    res.json(await Musician.findAll({where:{id:req.params.id}}))
})

//Add musician by Id
router.post('/',async(req,res)=>{
    await Musician.create(req.body)
    res.json(await Musician.findAll())
})
//Update one musician by Id


router.put('/:id',async(req,res)=>{
    await Musician.update(req.body,{where:{id:req.params.id}})
    res.json(await Musician.findAll())
})
//Delete Musician by ID
router.delete('/:id',async(req,res)=>{
    await Musician.destroy({where:{id:req.params.id}})
    res.json(await Musician.findAll())
})






module.exports = router