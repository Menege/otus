const prisma = require('../plugins/db');

async function getAllUsers() {
  return prisma.user.findMany();
}

async function createUser(username, email, password, role = 'user') {
  return prisma.user.create({
    data: {
      username,
      email,
      password, // For production, don't forget to hash the password
      role
    }
  });
}

module.exports = { getAllUsers, createUser };
