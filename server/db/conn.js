const { default: mongoose } = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log(`MongoDB Url 1 Connected`);
  } catch (error) {
    console.log("Conneting Url 1 Failed");
    try {
      await mongoose.connect("mongodb://0.0.0.0:27017/");
      console.log(`MongoDB Url 2 Connected`);
    } catch (error) {
      console.log("Conneting Url 2 Failed");
    }
  }
};

connectDB();
