import express from "express";
import cors from "cors";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controllers/employeeController.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.get("/employees", getEmployees);
app.post("/employees", addEmployee);
app.put("/employees/:id", updateEmployee);
app.delete("/employees/:id", deleteEmployee);

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
