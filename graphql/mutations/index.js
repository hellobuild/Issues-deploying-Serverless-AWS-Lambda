const { mutationType } = require('nexus')

module.exports = {
  Mutation: mutationType({
    name: 'Mutation',
    definition(t) {
      t.crud.createOneUser()
      t.crud.deleteOneUser()
      t.crud.updateOneUser()
    }
  })
}
