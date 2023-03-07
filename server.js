const express = require("express");
const app = express();
const router = require('./routes/router')

const port = 3000;

app.use('/musicians',router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

