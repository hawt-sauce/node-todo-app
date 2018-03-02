"use strict";

const expect = require('expect');
const supertest = require('supertest');

const {app} = require("./../server");
const {Todo} = require("./../models/todo");

//use describe to group all the routes

describe('POST /todos', ()=>{
    it('should create a new todo', (done) => {
        let text = 'Check todo text';

        request(app)
            .post('/todos')
            .send({text})
            .status(100)
            .status(()=>{
                expect(res.body.text).toBe(text)
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                


            });
    });
});