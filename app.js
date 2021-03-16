//Loading modules
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require("./routes/admin")
const path = require('path')

app.use(express.json())


// Config
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Public
        app.use(express.static(path.join(__dirname,"public")))

//catch all
    app.use((error, req, res, next) => {
        res.status(error.status || 500)
        res.json({ error: error.message })
    })

//notFound
app.use((error, req, res, next) => {
    res.status(error.status || 404)
    res.json({ error: error. message})
})

// Route
    app.use(admin)

// Other
const PORT = 8081
app.listen(PORT, () => {
    console.log("Running server")
})