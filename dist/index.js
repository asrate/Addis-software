"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const song_route_1 = __importDefault(require("./router/song.route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGO).then(() => {
    console.log("database connected");
}).catch((error) => console.log(error));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/song", song_route_1.default);
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
