const validator = require("validator");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is yout name: ", (name) => {
  rl.question("What is your contact: ", (number) => {
    const isNumber = validator.isMobilePhone(number, "id-ID");
    if (!isNumber) {
      console.log(`number: ${number} is not valid`);
      return rl.close();
    }
    rl.question("What is your email: ", (email) => {
      const isEmail = validator.isEmail(email);
      if (!isEmail) {
        console.log(`email: ${email} is not valid`);
        return rl.close();
      }

      console.log(
        `\nYour name is ${name},\nwith number: ${number}, \nyour email address: ${email}`
      );

      rl.close();
    });
  });
});
