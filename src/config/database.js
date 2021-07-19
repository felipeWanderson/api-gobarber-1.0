module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: 5435,
  username: "postgres",
  password: "docker123",
  database: "gobarber",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
