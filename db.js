const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://Master:1234@cluster0.hge29.mongodb.net/graphql?retryWrites=true&w=majority"
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDb };
