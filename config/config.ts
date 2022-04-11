const env = process.env.NODE_ENV || "development";
const configFile = require(__dirname + "/../config/config.json")[env];

export const config = {
  username: configFile.username,
  password: configFile.password,
  database: configFile.database,
  host: configFile.host,
  dialect: configFile.dialect,
  saltwebtokenv1: configFile.saltWebTokenV1,
};
