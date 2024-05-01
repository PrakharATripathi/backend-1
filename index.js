require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("hello world!");
})

app.get('/x', (req, res) => {
    res.send("new name");
})
app.get('/github', (req, res) => {
    res.json(
        {
        "employee":{"name":"John", "age":30, "city":"New York"}
        });
})

app.listen(process.env.PORT,()=>{
    console.log(`server start you can go ${port}`)
});