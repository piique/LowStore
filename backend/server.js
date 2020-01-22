const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRouter = require('./controllers/foodRoutes');
const userRouter = require('./controllers/userRoutes')

const app = express();
app.use(bodyParser.json()); // Make sure it comes back as json
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
'mongodb+srv://LNb6IqMjV8jd4R6H:LNb6IqMjV8jd4R6H@lowstore-7lyq0.mongodb.net/main_database?retryWrites=true&w=majority',
{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}
);

app.use(foodRouter);
app.use(userRouter);

app.listen(3000, () => {
  console.log('Server is running...');
});
