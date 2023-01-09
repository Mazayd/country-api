import express from 'express'
import * as dotenv from 'dotenv'
import { countryRouter } from './src/routes/country.router.mjs'
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api', countryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})