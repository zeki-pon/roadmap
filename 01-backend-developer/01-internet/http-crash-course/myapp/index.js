const express = require("express");
const { readdirSync } = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// 指定されたパス（"/"）でHTTPのGETリクエストに応答
app.post("/contact", (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }

    // database stuff
    res.status(201).send(`Thank you ${req.body.name}`);
})

app.post("/login", (req, res) => {
    if (!req.header('x-auth-token')) {
        return res.status(400).send("No Token");
    }

    if (req.header('x-auth-token') !== '123456') {
        return res.status(401).send('Not authorized');
    }

    res.send('Logged in');
})

app.put('/post/:id', (req, res) => {
    // database stuff

    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

app.delete('/post/:id', (req, res) => {
    // database stuff

    res.json({
        msg: `Post ${req.params.id} deleted`
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})