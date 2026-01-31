import fs from "fs";

const DATA_FILE = "./employees.json";

// helper functions
const getEmployeesFromFile = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const saveEmployeesToFile = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// GET employees
export const getEmployees = (req, res) => {
  const employees = getEmployeesFromFile();
  res.json(employees);
};

// ADD employee
export const addEmployee = (req, res) => {
  const employees = getEmployeesFromFile();

  const newEmployee = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    status: req.body.status,
  };

  employees.push(newEmployee);
  saveEmployeesToFile(employees);

  res.json(newEmployee);
};

// UPDATE employee
export const updateEmployee = (req, res) => {
  const employees = getEmployeesFromFile();
  const id = Number(req.params.id);

  const index = employees.findIndex((emp) => emp.id === id);
  employees[index] = { ...employees[index], ...req.body };

  saveEmployeesToFile(employees);
  res.json(employees[index]);
};

// DELETE employee
export const deleteEmployee = (req, res) => {
  const id = Number(req.params.id);
  const employees = getEmployeesFromFile().filter((emp) => emp.id !== id);

  saveEmployeesToFile(employees);
  res.json({ message: "Employee deleted" });
};
