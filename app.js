const validator = require("validator");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const identity = {};

const inputName = () => {
  rl.question("your Name: ", (name) => {
    identity.name = name;
    inputNumberPhone();
  });
};

const inputNumberPhone = () => {
  rl.question("Your phone number: ", (number) => {
    const isNumberPhone = validator.isMobilePhone(number, "id-ID");
    if (!isNumberPhone) {
      console.log(`Number ${number} is not valid`);
      return inputNumberPhone();
    }
    identity.phone = number;
    inputEmail();
  });
};

const inputEmail = () => {
  rl.question("Your Email: ", (email) => {
    const isEmail = validator.isEmail(email);
    if (!isEmail) {
      console.log(`Email ${email} is not valid`);
      return inputEmail();
    }
    identity.email = email;
    console.log(
      `\nYour name: ${identity.name},\nYour phone: ${identity.phone},\nYour email: ${identity.email}`
    );
    rl.close();
  });
};

inputName();
