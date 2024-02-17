import express from 'express';
import { router as apartmentRouter } from './apartments';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(cors()); 

app.use(express.json());

app.use('/apartments', apartmentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});