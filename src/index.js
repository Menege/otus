// src/index.js

const fastify = require('fastify')({ logger: true });
const config = require('../config/config');
const dbPlugin = require('./plugins/db');
const authPlugin = require('./plugins/auth');

// Регистрация плагинов
fastify.register(dbPlugin);
fastify.register(authPlugin);

// Swagger документация
fastify.register(require('@fastify/swagger'), {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'LeetCode Clone API',
      description: 'API документация для клона LeetCode',
      version: '0.1.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true
});

// Загрузка маршрутов
fastify.register(require('./routes/authRoutes'), { prefix: '/auth' });
fastify.register(require('./routes/taskRoutes'), { prefix: '/tasks' });
fastify.register(require('./routes/userRoutes'), { prefix: '/users' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();