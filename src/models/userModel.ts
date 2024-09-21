
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()// Assuming PrismaClient is correctly set up in the db file
import { users } from '@prisma/client';  // Import the User type from Prisma schema

// Определение типов для параметров пользователя
interface CreateUserData {
  username: string;
  email: string;
  password: string; // Пароль должен быть захеширован в production
  role?: string;  // По умолчанию 'user'
}

async function getAllUsers(): Promise<users[]> {
  return prisma.users.findMany();
}

async function createUser(data: CreateUserData): Promise<users> {
  const { username, email, password, role = 'user' } = data;
  return prisma.users.create({
    data: {
      username,
      email,
      password, // Don't forget to hash the password in production
      role
    }
  });
}

export { getAllUsers, createUser };
