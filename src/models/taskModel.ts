
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()// Assuming PrismaClient is correctly set up in the db file
import { tasks } from '@prisma/client';  // Import the Task type from Prisma schema

// Определение типов для параметров задачи
interface CreateTaskData {
  title: string;
  description: string;
  examples: string;
  difficulty: string;
  tags: string;
  materials: string;
}

async function getAllTasks(): Promise<tasks[]> {
  return prisma.tasks.findMany();
}

async function createTask(data: CreateTaskData): Promise<tasks> {
  const { title, description, examples, difficulty, tags, materials } = data;
  return prisma.tasks.create({
    data: {
      title,
      description,
      examples,
      difficulty,
      tags,
      materials,
    }
  });
}

export { getAllTasks, createTask };
