const path = require('path')

const express = require("express");

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

app.get('/stage', (req ,res) => {
    console.log(req.query)
    // if(!req.query.ans){
    //     return res.send({
    //         'error' : 'ERROR'
    //     })
    // }
    if (req.query.ans.toLowerCase() === "abc"){
        return res.send({
            'isCorrect': true
        })
    }
    return res.send({
        'isCorrect': false
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})
