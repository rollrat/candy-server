const env = process.env.NODE_ENV || "development";
const configFile = require(__dirname + "/../private/config.json")[env];

export const config = {
  username: configFile.username,
  password: configFile.password,
  database: configFile.database,
  host: configFile.host,
  dialect: configFile.dialect,
  saltsessionv1: configFile.saltsessionv1,
  saltwebtokenv1: configFile.saltwebtokenv1,
  saltarticlepassword: configFile.saltarticlepassword,
  issuer: configFile.issuer,
};