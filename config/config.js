// config/config.js

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
  DB_CONNECTION:
    process.env.DB_CONNECTION || "postgres://postgres:1@localhost/leetcode",
};
