const express = require("express");
const db = require("../config/knex");
const router = express.Router();
  
router.post("/save", (req, res) => {
  try {
    const {
     firstForm: {  gender,  dob, pregnant,  breastfeeding, smoke},
   secondForm: { fracture, duration},
   thirdForm:  { activity,
    improve,
    tingling,
    swelling,
    redburning,
    ratepain}
    } = req.body;
    let { secondForm: {disease} } = req.body;
    disease = JSON.stringify(disease);
    const created_at = new Date().toLocaleString();
    db("users")
      .returning("id")
      .insert({
        gender,
        dob,
        pregnant,
        breastfeeding,
        smoke,
        fracture,
        disease,
        duration,
        activity,
        improve,
        tingling,
        swelling,
        redburning,
        ratepain,
        created_at,
      })
      .then((result) => {
        if (result.length > 0) {
          res.send({ status: 200, message: "Record created successfully" });
        } else {
          res.send({ status: 404, message: "Record was not created" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/", (req, res) => {
  const result = db("users")
    .select()
    .then((data) => {  
      res.send(data).status(200);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db("users")
  .where({id})
    .first()
    .then((data) => {  console.log({data})
      res.send(data).status(200);
    });
});

module.exports = router;
