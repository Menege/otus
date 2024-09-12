const taskController = require('../controllers/taskController');

module.exports = async function (fastify, opts) {
  fastify.get('/', taskController.getTasks);
  fastify.get('/:id', taskController.getTaskById);
  fastify.post('/', taskController.createTask);
  fastify.put('/:id', taskController.updateTask);
  fastify.delete('/:id', taskController.deleteTask);
};
