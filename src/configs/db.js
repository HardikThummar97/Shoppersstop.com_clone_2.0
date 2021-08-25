const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Hardik:Secret@123@cluster0.saqgp.mongodb.net/Shoppersstop?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
