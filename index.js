const express = require("express");
const app = express();
const dotenv = require('dotenv')


app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        slackUsername: "mista_fido",
        backend: true,
        age: 28,
        bio:"I am a graduate of computer science and I enjoy developing and engineering software"
    })
});

app.listen(process.env.PORT || 4000, () => {
    console.log('App is running on port 5000')
})