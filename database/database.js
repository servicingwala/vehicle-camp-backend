const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./database/dev.sqlite",
// });

const sequelize = new Sequelize(
  "mysql://uijdqvce85yzcmwk:4Wb2rq4LnvFXGhnuOs0a@bbfftpj38aeuvanvn7jj-mysql.services.clever-cloud.com:3306/bbfftpj38aeuvanvn7jj"
);
module.exports = sequelize;
