//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
//const MONGOURI = "mongodb+srv://trivenitalluri49:DQf9H4YRFI4m2o8n@cluster0.3tkvi6l.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";
const MONGOURI = "mongodb+srv://pusarlasailakshmi:vSzIi2BrMhYD67Tl@cluster0.7ud8zms.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

