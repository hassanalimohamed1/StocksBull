const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('hi')
})

const TABLE_API = process.env.API_NASDAQ

router.get('/', async (req,res) => {
    try {
        const apiRES = await needle('get', `${TABLE_API}`)
        const data = apiRES.body
        res.status(200).json(data)

    }
    catch(error){
        res.status(500).json({error})
    }

})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))