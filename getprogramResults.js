async function getProgramResults() {
    // Create a promise called runProgramPromise
    const runProgramPromise = new Promise((resolve, reject) => {
      // Do some work (e.g. run a program)
      const result = runProgram();
      // If the work is successful, resolve the promise with the result
      resolve(result);
      // If the work fails, reject the promise with an error
      reject(new Error("Failed to run program"));
    });
  
    try {
      // Wait for the result of the promise using the await keyword
      const result = await runProgramPromise;
      // Return the result to the caller of the function
      return result;
    } catch (error) {
      // If the promise is rejected, throw an error to be caught by the caller of the function
      throw error;
    }
  }
  getProgramResults()
    .then(result => {
      // Do something with the result of the program
    })
    .catch(error => {
      // Handle the error
    });
  