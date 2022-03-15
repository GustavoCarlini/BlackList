
module.exports = {
  host: 5432,
  username: postgres,
  password: 1234,
  database: nodeauth,
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};