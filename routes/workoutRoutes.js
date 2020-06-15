const router = require('express').Router()
const { Workout } = require('../models')

// Get last workout
router.get('/workouts', async (req, res) => {
  try
  {
    let item = await Workout.find().limit(1).sort({_id: -1})
    res.json(item)
  }
  catch(err) {console.error(err)}

})

// Get all workout
router.get('/workouts/range', async (req, res) => {
  try
  {
    let item = await Workout.find()
    res.json(item)
  }
  catch (err) {console.error(err)}
  })

// Add exercise
router.put('/workouts/:id', async (req, res) => {
  try {
    let item = await Workout.findByIdAndUpdate(req.params.id, { $push : {exercises : [req.body]}})
    res.json(item)
  } catch (e) {console.log(e)}
})

// Create new workout
router.post('/workouts/', async (req, res) => {
  try { 
  let item = await Workout.create(req.body) 
  res.json(item)
  } catch(e) {console.log(e)}
})

module.exports = router
