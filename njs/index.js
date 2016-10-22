var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

var computeNb = function(a,x,y, count= 0) {
  for (var i = x-1; i < x+1; i++)
    for (var j = y-1; j < y+1; j++)
      if (i>=0 && i<=2 && j>=0 && j<=2 && (i != x && j != y))
        count+= a[i][j];
  return count;
}

var isAlive = function(a, x, y) {
  return a[x][y] == true;
}

var underPopulationBehavior = function() {
  nextGrid[x][y] = false;
}

var aliveBehavior = function (nbNbrs, nextGrid, x, y) {
  if(nbNbrs < 2)
    underPopulationBehavior();
}

var behavior = function(nbNbrs, nextGrid, x, y) {
  if(isAlive(x, y)) {
    aliveBehavior(nbNbrs, nextGrid, x, y);
  } else {

  }
}

var nextGrid = generateArray(true, []);
var myApp =  {
  go: function go(a){
    for (var i = 0; i < a.length; i++)
      for (var j = 0; j < a[i].length; j++)
        behavior(computeNb(a,i,j), nextGrid, i, j);
    return nextGrid;
  }
}


function initialize(value) {
  var entry = [[],[],[]];
  for(var i = 0; i < 3; i++)
    for(var j = 0; j < 3; j++)
      entry[i][j] = value;
  return entry;
}

function generateArray(value, entries) {
    var tab = initialize(!value);
    for(var entry in entries)
      tab[entry[0]][entry[1]] = value
    return tab;
}

describe('Test array generation', function() {
  it('Array should match', function() {
    var entry = generateArray(true, []);
    assert.equal(entry, [[0,0,0],[0,0,0],[0,0,0]]);
  });

  it('Array should match', function() {
    var entry = generateArray(true, [[1,1]]);
    assert.equal(entry, [[0,0,0],[0,1,0],[0,0,0]]);
  });
})


describe('Test underpopulation', function() {
  it('Array should match', function() {
    var entry = generateArray(true, [[1,1], [2,2]]);
    var out = generateArray(true, []);
    assert.equal(myApp.go(entry), out);
  });
})

describe('Test survival', function() {
  it('Array should match', function() {
    var entry = array(
      array(0, 0, 0),
      array(1, 1, 0),
      array(0, 1, 1)
    )

    var out = array(
      array(0, 0, 0),
      array(0, 1, 0),
      array(0, 0, 0)
    )
    assert.equal(myApp.go(entry), out);
  });
})
describe('Test overcrowding', function() {
  it('Array should match', function() {
    var entry = array(
      array(1, 1, 1),
      array(1, 1, 1),
      array(1, 1, 1)
    )

    var out = array(
      array(0, 0, 0),
      array(0, 0, 0),
      array(0, 0, 0)
    )

    var myApp;
    assert.equal(myApp.go(entry), out);
  });
})
describe('Test reproduction', function() {
  it('Array should match', function() {
    var entry = array(
      array(0, 0, 0),
      array(1, 0, 0),
      array(0, 1, 1)
    )

    var out = array(
      array(0, 0, 0),
      array(0, 1, 0),
      array(0, 0, 0)
    )

    var myApp;
    assert.equal(myApp.go(entry), out);
  });
})
