"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    });
});
module.exports = router;
