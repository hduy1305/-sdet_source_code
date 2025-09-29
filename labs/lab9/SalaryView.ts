import Employee from "./Employee"
import FullTimeEmployee from "./FullTimeEmployee"
import ContractEmployee from "./ContractEmployee"
import SalaryController from "./SalaryController"

const fteNumber1 = new FullTimeEmployee();
const fteNumber2 = new FullTimeEmployee();

const ceNumber1 = new ContractEmployee();
const ceNumber2 = new ContractEmployee();
const ceNumber3 = new ContractEmployee();
const employeeList = [fteNumber1, fteNumber2, ceNumber1, ceNumber2, ceNumber3];

const salaryController = new SalaryController();
salaryController.calculateTotalSalary(employeeList);