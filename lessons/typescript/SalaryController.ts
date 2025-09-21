import Employee from "./Employee";

export default class SalaryController {
    public getTotalSalary(employeeList: Employee[]){
        let totalSalary = 0;
        for (const emp of employeeList) {
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    }
}