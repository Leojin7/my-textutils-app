const mongoose = require('mongoose');  // Fixed typo here
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000&connectTimeoutMS=2000&socketTimeoutMS=2000&maxPoolSize=50&minPoolSize=5&maxIdleTimeMS=10000&waitQueueTimeoutMS=5000";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;

