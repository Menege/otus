const fastifyPlugin = require('fastify-plugin');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function dbConnector(fastify, options) {
  fastify.decorate('prisma', prisma);
}

module.exports = fastifyPlugin(dbConnector);
