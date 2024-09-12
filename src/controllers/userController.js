const prisma = require('../plugins/db').prisma;

const getUsers = async (request, reply) => {
  const users = await prisma.user.findMany();
  reply.send(users);
};

const getUserById = async (request, reply) => {
  const { id } = request.params;
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (user) {
    reply.send(user);
  } else {
    reply.status(404).send({ message: 'User not found' });
  }
};

const createUser = async (request, reply) => {
  const { username, email, password, role } = request.body;
  const newUser = await prisma.user.create({
    data: { username, email, password, role }
  });
  reply.status(201).send(newUser);
};

const updateUser = async (request, reply) => {
  const { id } = request.params;
  const { username, email, password, role } = request.body;
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { username, email, password, role }
  });
  reply.send(updatedUser);
};

const deleteUser = async (request, reply) => {
  const { id } = request.params;
  await prisma.user.delete({ where: { id: parseInt(id) } });
  reply.status(204).send();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
