const fastifyPlugin = require('fastify-plugin');
const fastifyJwt = require('@fastify/jwt');

async function authPlugin(fastify, options) {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'supersecretkey'
  });

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
}

module.exports = fastifyPlugin(authPlugin);
