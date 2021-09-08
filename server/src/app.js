const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req,res)=>{
    res.send("yo")
})

app.listen(port, ()=>{
    console.log("Started on port " + port)
})