module.exports = {
  HOST: "localhost",
  USER: "rizal",
  PASSWORD: "0000",
  DB: "project_absensi",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};