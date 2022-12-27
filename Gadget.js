// Base Gadget class
class Gadget {
    // Constructor function to set the startTime and salePrice properties
    constructor(startTime, salePrice) {
      this.startTime = startTime;
      this.salePrice = salePrice;
    }
  
    // Start method
    start() {
      console.log('Gadget started');
    }
  
    // End method
    end() {
      console.log('Gadget ended');
    }
  }
  
  // StopWatch class
  class StopWatch extends Gadget {
    // Constructor function to set the stopWatchType property
    constructor(startTime, salePrice, stopWatchType) {
      super(startTime, salePrice);
      this.stopWatchType = stopWatchType;
    }
  }
  
  // SmartWatch class
  class SmartWatch extends Gadget {
    // Constructor function to set the screenSize property
    constructor(startTime, salePrice, screenSize) {
      super(startTime, salePrice);
      this.screenSize = screenSize;
    }
  }
  
  // Create an instance of the StopWatch class
  let stopWatch = new StopWatch(new Date(), 100, 'analog');
  
  // Log the properties of the StopWatch instance
  console.log(stopWatch.startTime); // Date object
  console.log(stopWatch.salePrice); // 100
  console.log(stopWatch.stopWatchType); // 'analog'
  
  // Call the start method of the StopWatch instance
  stopWatch.start(); // Output: 'Gadget started'
  
  // Create two instances of the SmartWatch class
  let smartWatch1 = new SmartWatch(new Date(), 200, '42mm');
  let smartWatch2 = new SmartWatch(new Date(), 300, '38mm');
  
  // Add the connectToInternet method to the prototype of the SmartWatch class
  SmartWatch.prototype.connectToInternet = function() {
    console.log('Connecting to the internet...');
  }
  
  // Call the connectToInternet method on the two SmartWatch instances
  smartWatch1.connectToInternet(); // Output: 'Connecting to the internet...'
  smartWatch2.connectToInternet(); // Output: 'Connecting to the internet...'
  