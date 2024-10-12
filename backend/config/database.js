const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://campus:5IUAVAAIX9EZnXiO@cluster0.mhgww.mongodb.net/campus').then(()=> console.log("DB connected!!!"))
}

module.exports = { connectDB }