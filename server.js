import express from 'express';
import articleRouter from './routes/articleRouter.js';
import cors from 'cors';
import errorHandler from './middleware/error.js';
import logger from './middleware/logger.js';

const app = express();

//CORS
app.use(cors({
  origin: process.env.SHOPIFY_STORE_DOMAIN
}))

//Logger
app.use(logger);

// Routes
app.use('/api/articles', articleRouter);

//Error handler
app.use(errorHandler)

app.listen(8000, () => console.log(`Server is running on port ${process.env.PORT}`))