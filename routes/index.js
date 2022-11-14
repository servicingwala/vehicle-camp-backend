const express = require("express");
const sequelize = require("../database/database");
const Vehicle = require("../models/Vehicle");

sequelize.sync().then(() => {
  console.log("Database connection established");
});

const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

//test root route
app.get("/", (req, res) => {
  res.send("Hello World! This is the root route of the app");
});

//create vehicle route
app.post("/create-vehicle", async (req, res) => {
  await Vehicle.create(req.body);
  res.send("vehicle details saved");
});

//get all vehicles route
app.get("/getall-vehicles", async (req, res) => {
  const vehicles = await Vehicle.findAll();
  res.send(vehicles);
});

//get vehicle by vehicleNumber route
app.get("/get-vehicle/:vehicleNumber", async (req, res) => {
  const vehicle = await Vehicle.findOne({
    where: { vehicleNumber: req.params.vehicleNumber },
  });
  res.send(vehicle);
});

//update vehicle by vehicleNumber route
app.put("/update-vehicle/:vehicleNumber", async (req, res) => {
  await Vehicle.update(req.body, {
    where: { vehicleNumber: req.params.vehicleNumber },
  });
  res.send("vehicle details updated");
});

//delete vehicle by vehicleNumber route
app.delete("/delete-vehicle/:vehicleNumber", async (req, res) => {
  await Vehicle.destroy({
    where: { vehicleNumber: req.params.vehicleNumber },
  });
  res.send("vehicle details deleted");
});
