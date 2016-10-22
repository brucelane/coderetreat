var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;

describe('Basic tests cases - Game of life', function(){
    describe('Count neighbours', function(){
      it('Count neighbours should return 1', function(done){
        var mat = [[0,0,0],[0,1,0],[0,0,1]];
        expect(CountNeighbours(mat,1,1)).equals(1);
        done();
      })
      it('Count neighbours should return 2', function(done){
        var mat = [[1,1,0],[0,1,0],[0,0,0]];
        expect(CountNeighbours(mat,1,1)).equals(2);
        done();
      })
      it('Count neighbours should return 1', function(done){
        var mat = [[1,0,0],[0,1,1],[0,0,0]];
        expect(CountNeighbours(mat,2,1)).equals(1);
        done();
      })
    })
}
);

let CountNeighbours =  function(mat,x,y) {
  var count = 0;
  for (var i = 0; i < mat.length; i++) {
    //mat[i]
    console.log(i + ' ' + mat[i]);
    for (var j = 0; j < mat[i].length; j++) {
      if (i === x-1  && j === y-1) {
          count ++;
      }
      if (i === x-1  && j === y) {
        count ++;
      }
      if (i === x-1  && j === y+1) {
        count ++;
      }

      if (i === x  && j === y-1) {
          count ++;
      }
      if (i === x  && j === y) {
        count ++;
      }
      if (i === x  && j === y+1) {
        count ++;
      }

    }
  }

  /*return  mat[x-1][y-1] + mat[x-1][y] + mat[x-1][y+1] + // First row
          mat[x][y-1] + mat[x][y+1] +
          mat[x+1][y-1] + mat[x+1][y] + mat[x+1][y+1];*/
};
