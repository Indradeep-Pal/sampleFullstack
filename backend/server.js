const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config()
const app = express()
const port = process.env.PORT
app.use(cors({
    origin: process.env.FRONTEND_URI
}))

const jokes = [
    {
        id : 1,
        title : "Joke 1",
        content : "This is the first joke very funny🤣😂"
    },
    {
        id: 2,
        title: "Joke 2",
        content: "This is the second joke very funny🤣😂"
    },
    {
        id: 3,
        title: "Joke 3",
        content: "This is the third joke very funny🤣😂"
    },
    {
        id: 4,
        title: "Joke 4",
        content: "This is the fourth joke very funny🤣😂"
    },
    {
        id: 5,
        title: "Joke 5",
        content: "This is the fifth joke very funny🤣😂"
    },
]
app.get('/api/', (req, res) => {
    res.send("Hello ! Welcome to the Home Page")
})
app.get('/api/about', (req, res) => {
    res.send("Hello ! Welcome to the About Page")
})
app.get('/api/contact', (req, res) => {
    res.send("Hello ! Welcome to the Contact Us Page")
})
app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`App is started and running live at port ${port}`)
})