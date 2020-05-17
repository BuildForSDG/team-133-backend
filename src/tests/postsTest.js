/*eslint-disable*/

//during the test the env var is set to test
process.env.NODE_ENV='test';
let db= require('../models/posts');
let server= require('../server');
//require the dev dependencies
let chai= require('chai');
let chaiHttp= require('chai-http');
let should= chai.should();
let assert= require('assert');
const { expect}= chai;

chai.use(chaiHttp);


//parent block
describe('Posts',()=>{
    describe('Delete all first', ()=>{
        console.log('Deleting all data in db first')
        chai.request(server)
        .delete('/api/posts/:id')
        .send({})
        .end((err,res)=>{
            res.should.have.status(201);
            console.log('Response Body:', res.body);
            done();
        })
 
    })
});
    