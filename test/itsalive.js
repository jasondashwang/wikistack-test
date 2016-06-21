var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var expect = chai.expect;



describe('Test', function (){
  it('should work', function (){
    expect(5+5).to.equal(10);
  });

  it('confirms the timer accuracy', function (){
    var start = new Date();

    setTimeout(function(){
      var duration = new Date() - start;
      expect(duration).to.be.closeTo(1000, 50);


    }, 1000);

  });


  it('confirms spies works', function (){
    var obj = {
      hello: 4,
      hihi: 'greetings',
      keys: [1,2,3]
    };

    var listAllKeys = function(input){
      return Object.keys(input);
    };

    listAllKeys = chai.spy(listAllKeys);

    listAllKeys(obj);

    expect(listAllKeys).to.have.been.called.exactly(1);



  });


});
