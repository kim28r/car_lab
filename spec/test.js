// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){
  var myCar; 
  beforeEach(function(){
    myCar = new Car("Honda", "Accord", 1990, "yellow"); 
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(1990); 
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off"); 
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.be.empty; 
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal("manufacturer"); 
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.be.empty; 
    });
  });

  describe('#sale', function(){
    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Tom"); 
      expect(myCar.previousOwners).to.eql(["manufacturer"]);
    }); 
    it('should update currentOwner with the new owner', function(){
      myCar.sale("Tom"); 
      expect(myCar.currentOwner).to.equal("Tom"); 
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
    myCar.paint("blue"); 
    expect(myCar.color).to.equal("blue"); 
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start(); 
      expect(myCar.state).to.equal("on"); 
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off(); 
      expect(myCar.state).to.equal("off"); 
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
    myCar.off(); 
    expect(myCar.park()).to.equal("parked!"); 
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start(); 
      myCar.pickUp("Lucy"); 
      expect(myCar.passengers).to.eql(["Lucy"]); 
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off(); 
      myCar.pickUp("Toby"); 
      expect(myCar.passengers).to.eql(["Lucy"]); 
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
    myCar.start();
    myCar.passengers = ["Lucy"]; 
    myCar.dropOff("Lucy"); 
    expect(myCar.passengers).to.eql([]); 
    });

    it('should leave passenger in the passengers array if car is off', function(){
    myCar.off();
    myCar.passengers = ["Lucy"]; 
    myCar.dropOff("Lucy"); 
    expect(myCar.passengers).to.eql(["Lucy"]); 
    });
  });

});