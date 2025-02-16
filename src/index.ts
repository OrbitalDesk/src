import express from 'express';
import { PrismaClient } from '@prisma/client';

import AdminApi from "./api/admin.api"

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use('/api', AdminApi)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
