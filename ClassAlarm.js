function ClassAlarm() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Class is over");
      }, 30 * 60 * 1000); // 30 minutes in milliseconds
    });
  }
  
  async function main() {
    const message = await ClassAlarm();
    console.log(message);
  }
  
  main();
  