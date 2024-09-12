const prisma = require('../plugins/db');  // Assuming PrismaClient is used

async function getAllTasks() {
  return prisma.task.findMany();
}

async function createTask(title, description, examples, difficulty, tags, materials) {
  return prisma.task.create({
    data: {
      title,
      description,
      examples,
      difficulty,
      tags,
      materials
    }
  });
}

module.exports = { getAllTasks, createTask };
