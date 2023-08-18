// Import packages
import express from 'express'
import TestController from "./controllers/test.controller";
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());
app.use(new TestController().Routes)
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
