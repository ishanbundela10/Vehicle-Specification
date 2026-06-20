console.log("file loaded")

import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDB from "./src/db/index.js";
import carsroutes from "./src/routes/cars.routes.js";
import companyroutes from "./src/routes/company.routes.js";
import brandoverviewroutes from "./src/routes/brandoverview.routes.js";

dotenv.config();

console.log(process.env.MONGODB_URI);
console.log(DB_NAME);

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors())

connectDB();

// app.get("/api/cars", (req, res) => {
//   res.json(cars)
// })

// app.get("/api/cars/:id", (req, res)=>{

//   const id = Number(req.params.id)
//   const car = cars.find(
//     car => car.id === id
//   )
//   res.json(car)
// })

// // /api/search?q=ferrari

// app.get("/api/search", (req,res)=>{
  
//   const q = req.query.q;
  
//   const result = cars.filter(car =>
//     car.name.toLowerCase()
//     .includes(q.toLowerCase())
//   )
  
//   res.json(result);

// })

// app.get("/", (req, res)=>{
//   res.send('hello');
  
// })
app.use("/api/cars", carsroutes);
app.use("/api/companies", companyroutes);
app.use("/api/brands", brandoverviewroutes )

app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
})