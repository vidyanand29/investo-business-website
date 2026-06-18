require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const businessIdeaRoutes = require('./routes/businessIdeaRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors(
{origin:process.env.CLIENT_URL}
));

app.use("/users", userRoutes);
app.use("/business", businessIdeaRoutes);

app.use((req, res)=> {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found!`
  })
})

app.use((err, req, res, next)=> {
  const errStatus = err.status || 500;
  res.status(errStatus).json({
    success: false,
    message: err.message || "Server Error!"
  })
})

//start server
async function startServer() {
  try {
    console.log("Database connecting...")
    await connectDB();
    app.listen(PORT, ()=> {
      console.log(`Server Port : ${PORT}`);
    })
  } catch (err) {
    console.error("Database connection failed!", err.message);
    process.exit(1);
  }
}
startServer();