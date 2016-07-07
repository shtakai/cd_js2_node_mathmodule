var _ = require('underscore');
var assert = require('power-assert');
var expect = require('chai').expect;

var mathlib = require('../lib/mathlib.js');
describe('mathlib', function(){

  before(function(){
  })
  it('returns 5 when add(1,4)', function(){
    expect(mathlib.add(1,4)).to.be.equal(5);
  });

  it('returns -1 when add(-1,0)', function(){
    expect(mathlib.add(-1,0)).to.be.equal(-1);
  });

  it('returns 777 when 7 multiplies by 111',function(){
     expect(mathlib.multiply(7,111)).to.be.equal(777);
  })
  it('returns -9 when -3 multiplies by 3',function(){
     expect(mathlib.multiply(-3, 3)).to.be.equal(-9);
  });
  it('returns 0 when -3 multiplies by 0',function(){
     expect(mathlib.multiply(-3, 0)).to.be.equal(0);
  });

  it('returns 625 when 25 square', function(){
     expect(mathlib.square(25)).to.be.equal(625);
  });


  it('returns 625 when -25 square', function(){
     expect(mathlib.square(-25)).to.be.equal(625);
  });

  it('returns 0 when 0 square', function(){
     expect(mathlib.square(0)).to.be.equal(0);
  });

  it('returns random number between 10 and 20',function(){
    var randomNumber = mathlib.random(10,20);
    expect(randomNumber).to.be.least(10);
    expect(randomNumber).to.be.most(20);
  });

  it('returns random number between 10 and 11 (strict)',function(){
    _(1000).times(function(n){
      var randomNumber = mathlib.random(10,11);
      expect(randomNumber).to.be.least(10);
      expect(randomNumber).to.be.most(11);
    });
  });
  // TODO: expect throwing error(now cannot catch)
  //it('throws error when each/both args are null/undef', function(){
    ////expect(mathlib.err()).to.throw(Error);
    //assert.equal(mathlib.add(1,2), 4444);
  //});
  //it('returns the first "2" when find applies finding 2', function(){
    //callback = function(num){
      //return num % 2 ==0;
    //}
    //expect(_.find(array, callback)).to.be.equal(2);
  //});
});
