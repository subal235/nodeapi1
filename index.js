import express from "express";
import bodyParser from "body-parser";
import userRoute from './routes/users.js';
const app = express();
const PORT = 5000;
//middleware
app.use(bodyParser.json());
app.use('/users',userRoute);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
