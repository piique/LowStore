const express = require('express');
const foodModel = require('../models/food.model');
const router = express();

router.use((req, res, next) => {
  console.time('Request time');
  console.log(`Método ${req.method};\nURL: ${req.url};`);
  next();

  console.timeEnd('Request time');
});

function checkIdExists(req, res, next) {
  if (!req.body.id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  return next();
}

router.get('/foods', async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/food', async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/food/:id', async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);
    if (!food) res.status(404).send('No food found');
    res.status(200).send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

// server.delete("/users/:index", (req, res) => {
//   const { index } = req.params;

//   users.splice(index, 1);

//   return res.json(users);
// });

router.put('/food/:id', async (req, res) => {
  try {
    console.log(req.body)
    const food = await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
