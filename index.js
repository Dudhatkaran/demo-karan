const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(9898, () => {
    console.log("Sever Start...");
});

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})