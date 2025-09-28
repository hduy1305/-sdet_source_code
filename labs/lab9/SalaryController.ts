import Employee from "./Employee";

export default class SalaryController {

    public calculateTotalSalary(employeeList: Employee[]){
        let sum = 0;
        for (const employee of employeeList){
            sum+=employee.getSalary();
        }
        console.log(`Total Salary ${sum}`);
    }

    public sortBySalary(employeeList: Employee[]): Employee[]{
        const sortedList = []        
        for (const employee of employeeList){
            sortedList.push(employee);
        }
        return sortedList;
    }

    public sortByName(employeeList: Employee[]): Employee[]{
        const sortedList = []        
        for (const employee of employeeList){
            sortedList.push(employee);
        }
        return sortedList;
    }
}