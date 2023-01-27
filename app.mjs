import express from 'express'
import * as dotenv from 'dotenv'
import { countryRouter } from './src/routes/country.router.mjs'
import mongoose from 'mongoose'
import morgan from 'morgan'
import { usersRouter } from './src/routes/user.router.mjs'


dotenv.config()


const app = express();
const port = process.env.PORT;



const db = 'mongodb+srv://mazay:dX2T4zcJMFW7YMvv@cluster0.qwhvqn1.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);

mongoose
  .connect(db)
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(morgan('common'));
app.use('/api', countryRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
