// CommonJS
// const nodemon = require("nodemon");

const user = require('./users');
// console.log(user);

const { admins } = require('./users');
// console.log(admins);

// const { getCurrentMonth } = require('./date');
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth}`);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now ${currentMonth}`);
