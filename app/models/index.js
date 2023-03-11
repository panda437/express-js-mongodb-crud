const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
// async task
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./users.model.js")(mongoose);
db.entries = require("./entries.model")(mongoose);
module.exports = db;
