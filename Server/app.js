"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Read the port number from the environment variable
const port = process.env.PORT || 3000;
// Create an Express application
const app = (0, express_1.default)();
//userRouter
app.get('/user', (req, res) => {
    res.send('Hello, Express!');
});
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ userId });
    return;
});
//ImageRouter
app.post('/image', (req, res) => {
    res.send('Hello, Express!');
});
app.post('/image/:id', (req, res) => {
    const imageId = req.params.id;
    const yossi = req.body.yossi;
    res.status(200)(`Yarin Hadad: ${yossi} ${imageId}`);
    return;
});
// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
