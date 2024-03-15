import router from './routes/index.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(router);
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
