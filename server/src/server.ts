import express from 'express'

const app  = express()

app.get("/", (req, res) =>{
    res.send("funcionando")
})

app.listen(3333, ()=>{
    console.log("Severver running on port 3333..")
})