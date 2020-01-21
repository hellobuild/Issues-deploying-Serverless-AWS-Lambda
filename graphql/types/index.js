const { objectType, enumType } = require("nexus");

module.exports = {
  User: objectType({
    name: "User",
    definition(t) {
      t.model.id();
      t.model.name();
      t.model.email();
      t.model.createdAt();
      t.model.updatedAt();
    }
  }),
};
