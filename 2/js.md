# coderetreat

JS: Mocha
var assert = require('assert');
/**
 * Created by admin on 22/10/2016.
 */
var size, state;
var grid =new Array();
 
describe('GameOfLife', function() {
    describe('#setup',function() {
        size = 3;
        for (var i = 0 ; i < size ; i++){
            for (var j = 0 ; j < size ; j++){
                state = Math.floor(Math.random() + 0.5);
                console.log(state);
                grid[j] = state;
            }
        }
    });
 
    describe('#allCreated', function() {
        it('', function() {
            for (var i = 0 ; i < size ; i++){
                for (var j = 0 ; j < size ; j++){
                    assert.equal(grid[j],0,'msg');
                }
            }
        });
    });
});
RAW P
