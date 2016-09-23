var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/add Method", function(err){
  it("should respond", function(done){
    url
    .post("/movie/my")
    .send({
      Title :'P.S.I Love You' ,
      Type : 'movie',
      Poster : 'http://ia.media-imdb.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg',
      Year : 2007 ,
      imdbID : 'tt0431308'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        res.text.should.be.equal("Movie added");
        done();
      });

    });
  });

  describe("Testing /movie/display Method ", function(err){
    it("should respond", function(done){
      url
      .get("/movie/fav")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err,res){
        var myObj = JSON.parse(res.text);
        console.log(myObj);
        myObj[0].Title.should.be.equal("P.S.I Love You");
        done();
      });

    });
  });

  describe("Testing /movie/update Method", function(err){
    it("should respond", function(done){
      url
      .put("/movie/update")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Movie updated");
        done();
      });

    });
  });

  describe("Testing /movie/delete Method ", function(err){
    it("should respond", function(done){
      url
      .delete("/movie/unfav")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Movie deleted!");
        done();
      });
    });
  });
