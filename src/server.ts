import express,{ Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import productRouter from './routes/product.route';

// Create server
const app = express();

// Middleware
app.use(express.json());

//route
app.use('/', productRouter)

app.use((req: Request, res: Response) => {
  res.status(404).send('Invalid route!')
})

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 3000;
mongoose
  .connect("mongodb+srv://storeadmin:MZQ3dqabplCwTJEH@cluster0.p3uf15d.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));