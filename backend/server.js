const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes');
const userRouter = require('./routes/userRoutes')

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(
  'mongodb+srv://LNb6IqMjV8jd4R6H:LNb6IqMjV8jd4R6H@lowstore-7lyq0.mongodb.net/test?retryWrites=true&w=majority',
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
