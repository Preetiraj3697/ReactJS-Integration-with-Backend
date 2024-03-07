const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const Count = require('../models/Count');

// Get all user data
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Add new entry
router.post('/add', async (req, res) => {
  try {
    const { name, data } = req.body;
    const newEntry = new Entry({ name, data });
    await newEntry.save();

    // Increment add count and save to database
    const count = await Count.findOneAndUpdate({}, { $inc: { addCount: 1 } }, { upsert: true, new: true });
    
    res.status(201).json({ message: 'Entry added successfully', addCount: count.addCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update existing entry
router.post('/update/:id', async (req, res) => {
  try {
    const payload = req.body;
    const id = req.params.id;
    await Entry.findByIdAndUpdate(id, payload);

    // Increment update count and save to database
    const count = await Count.findOneAndUpdate({}, { $inc: { updateCount: 1 } }, { upsert: true, new: true });

    res.status(200).json({ message: 'Entry updated successfully', updateCount: count.updateCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get count of add and update API calls
router.get('/count', async (req, res) => {
  try {
    const count = await Count.findOne();
    res.json({ addCount: count.addCount, updateCount: count.updateCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
