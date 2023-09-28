const express = require("express")
const cors = require("cors")
const multipart = require("connect-multiparty")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

const multipartMiddleware = multipart({
    uploadDir: './uploads'
})
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files
    console.log(files)
    res.json({
        message: files
    })
})

app.get('/db', multipartMiddleware, (req, res) => {
    console.log("huehue")
})

app.use((err, req, res, next) => res.json({
    error: err.message
}))

app.listen(8000, () => {
    console.log("Servidor porta 8000")
})


/*  */

