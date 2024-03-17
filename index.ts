import router from './routes/index.ts';
import express from 'express';
import cors from './middleware/cors.ts';
import errorHandler from './middleware/errorHandler.ts';
import logger from './middleware/logger.ts';

const app = express();

app.use(cors);
app.use(router);
app.use(logger);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
