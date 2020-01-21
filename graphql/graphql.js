// Apollo Lambda
const { ApolloServer } = require('apollo-server-lambda')
const { makeSchema } = require('nexus')
const { Photon } = require('@prisma/photon')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { User } = require('./types')
const { Query } = require('./queries')
const { Mutation } = require('./mutations')

// JWT
const jwt = require('jsonwebtoken')

const photon = new Photon()

//GrapghQL
const server = new ApolloServer({
  schema: makeSchema({
    types: [
      Query,
      Mutation,
      User,
    ],
    plugins: [nexusPrismaPlugin({
      shouldGenerateArtifacts: false
    })],
  }),
  context: request => {
    return {
      request,
      photon,
    }
  },
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
