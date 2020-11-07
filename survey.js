const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (nameAns) => {
    rl.question("What's an activity you like doing? ", (activityAns) => {
      rl.question("What do you listen to while doing taht? ", (musicAns) => {
        rl.question("Which meal is your favorite? (eg: dinner, brunch, etc) ", (mealAns) => {
          rl.question("What is your favorite thing to eat for that meal? ", (foodAns) => {
            rl.question("Which sport is your absolute favourite? ", (sportAns) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPowerAns) => {
                console.log(`${nameAns} loves listening to ${musicAns} while doing his favorite hobby: ${activityAns}. He enjoys ${mealAns} the most, and loves to eat ${foodAns} for ${mealAns}. ${nameAns} enjoys playing ${sportAns}, and ${nameAns}'s superpower is "${superPowerAns}"!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });