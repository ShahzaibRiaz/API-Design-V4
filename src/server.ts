import express, { Express } from 'express';
import dotenv from 'dotenv';

/** ------------------------------ */
/** READ .env file and add variable to process */
/** ------------------------------ */
dotenv.config();

const PORT = process.env.PORT || 8000;

const app: Express = express();

app.listen(PORT, () => {
  console.log(`Listening to requests at PORT ${PORT}`);
});

export { app };
