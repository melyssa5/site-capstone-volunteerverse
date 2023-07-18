import express from 'express';

import { PORT } from './config';

import cors from "cors"
import morgan from "morgan"

import { volunteerRoutes } from './routes/volunteer';
import { authRoutes } from './routes/auth';
import { organizationRoutes } from './routes/organization';

export const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/auth", authRoutes)
app.use("/volunteer", volunteerRoutes)
app.use("/organization", organizationRoutes)
// app.use("/volunteer", volunteerRoutes)

app.get('/', (req, res) => {
  res.send('Hi World Test!');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
})




