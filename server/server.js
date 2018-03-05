"use strict";

const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req,res)=>{
//    console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(404).send(err);
    });
});

// let userTodo = new Todo({
//     text: 'More stuff to do',
//     completed: true
// });

// userTodo.save().then((docs) => {
//     console.log(JSON.stringify(docs,undefined,2));
// }).catch((err)=>{
//     console.log("Unable to save todo", err);
// });

// let server_user = new User({
//     email: 'username1@company.org'
// });

// server_user.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// }).catch((err)=>{
//     console.log("Unable to save user",err);
// });

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
});

module.exports = {app};
