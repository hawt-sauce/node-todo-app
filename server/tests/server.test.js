"use strict";

const expect = require('expect');
const supertest = require('supertest');

const {app} = require("./../server");
const {Todo} = require("./../models/todo");

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});
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
            
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((err)=> done(err));        
        });
    });

    it('should not create a new todo', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
            });

            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }).catch((err)=> done(err));
    });

});