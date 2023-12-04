const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    //deprecated, no need to use
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
