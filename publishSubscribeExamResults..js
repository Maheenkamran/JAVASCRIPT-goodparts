function publishSubscribeExamResults() {
    // Private member array to store subscribers
    const subscribers = [];
  
    return {
      // Function to add a subscriber
      subscribe: function(subscriber) {
        subscribers.push(subscriber);
      },
      // Function to publish a message to all subscribers
      publish: function(message) {
        subscribers.forEach(function(subscriber) {
          subscriber(message);
        });
      }
    };
  }
  
  const examResults = publishSubscribeExamResults();
  
  examResults.subscribe(function(message) {
    console.log(`Maheen received message: ${message}`);
  });
  
  examResults.subscribe(function(message) {
    console.log(`Haider received message: ${message}`);
  });
  
  examResults.publish('Exam results are out!');
  // Output:
  // Student 1 received message: Exam results are out!
  // Student 2 received message: Exam results are out!
  