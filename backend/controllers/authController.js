const express = require('express');
const bcrypt = require('bcryptjs');

const userModel = require('../models/user.model');
const router = express();

router.get('/user', async (req, res) => {
  const user = await userModel.find({});

  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/user', async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user)
      return res.status(400).send({ error:'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return 1;
        
});


module.exports = router;
