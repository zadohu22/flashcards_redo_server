import router from './routes/index.js';
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
	origin: '*', // Allow requests from any origin
	optionsSuccessStatus: 200,
};

// // Use the cors middleware with the specified options
app.use(cors(corsOptions));

app.use(router);
// app.use(cors());

// const corsOptions = {
// 	origin: 'http://localhost:5173', // Replace 'http://example.com' with your specific URL
// 	optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
