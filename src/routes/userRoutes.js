const userController = require('../controllers/userController');

module.exports = async function (fastify, opts) {
  fastify.get('/', userController.getUsers);
  fastify.get('/:id', userController.getUserById);
  fastify.post('/', userController.createUser);
  fastify.put('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);
};
