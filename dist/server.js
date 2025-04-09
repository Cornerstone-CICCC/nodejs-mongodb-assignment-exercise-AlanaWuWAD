"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const product_route_1 = __importDefault(require("./routes/product.route"));
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
//route
app.use('/', product_route_1.default);
app.use((req, res) => {
    res.status(404).send('Invalid route!');
});
// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
mongoose_1.default
    .connect("mongodb+srv://storeadmin:MZQ3dqabplCwTJEH@cluster0.p3uf15d.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
})
    .catch((err) => console.error('Failed to connect to MongoDB', err));
