const express = require('express');
const db = require('../data/dbConfig')

const router = express.Router();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// READ ALL ACCOUNTS
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get("/", async (req, res, next) => {
    try {
        // select * from cars
        const cars = await db.select("*").from("cars")

        res.json(cars)
    } catch(err) {
        next(err)
    }
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// READ BY ID
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get('/cars/:id', (req, res) => {
    db('cars')
      .where({ id: req.params.id })
      .first()
      .then(car => {
        if (car) {
          res.status(200).json(car);
        } else {
          res.status(404).json({ message: 'Car not found' });
        }
      });
  });

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // CREATE NEW ITEM
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  router.post("/", async (req, res, next) => {
    try {
        const [id] = await db
        .insert ({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            vin: req.body.vin,
            type: req.body.type,
            status: req.body.status
        })
        .into("cars")

        const car = await db("cars")
            // .select("*")
            // .from("accounts")
            .where("id", id)
            // .limit(1)
            .first()  
        res.status(201).json(car)
    } catch (err){
        next(err)
    }
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// UPDATE CAR
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.put("/:id", async (req, res, next) => {
    try {
        await db("cars")
        .update({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            vin: req.body.vin,
            type: req.body.type,
            status: req.body.status
        })
        .where("id", req.params.id)

        const car = await db("cars")
            .where("id", req.params.id)
            .first()

            res.status(201)
            .json({"account":"your car has been updated"})
            .json(car)
          
    }catch(err){
        next(err)
    }
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// DELETE CAR
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.delete("/:id", async (req, res, next) => {
    try {
        await db("cars")
        .where("id", req.params.id)
        .delete()

        res.status(200).json({car: "your car has been deleted"})
    }catch(err){
        next(err)
    }
})


module.exports = router;