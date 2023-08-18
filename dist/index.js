"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import packages
const express_1 = __importDefault(require("express"));
const home = require("./routes/home");
// Middlewares
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use("/home", home);
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
