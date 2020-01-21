const { queryType } = require("nexus");

module.exports = {
  Query: queryType({
    name: 'Query',
    definition(t) {
      t.crud.user()
      t.crud.users()
    }
  })
}
