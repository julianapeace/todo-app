var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http'); //helps u interact with express server
chai.use(chaiHttp);
var app = require('../app'); //import the app

describe('Express App', function() {
  describe('Hompage', function() { //describes it goes to the homepage
    it('contains hello world', function() { //does it contain hello world
      chai.request(app)
        .get('/')//can be a get or a post request
        .end(function (err, res) {
          expect(err).to.be.null; //make sure nothing is null. 'to be ' checks the type. 'to equal' means false could've worked to, like a '==='
          expect(res).to.have.status(200); //make sure status code is good. could have hello world in error page =/
          expect(res.text).to.include('Hello World') // make sure string 'hello world' is there
        });
    });
  });
});
