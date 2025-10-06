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
        const sortedList = [...employeeList]; // Create a shallow copy to avoid modifying the original array
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const n = sortedList.length;

        // // Bubble Sort Algorithm
        // for (let i = 0; i < n - 1; i++) {
        //     for (let j = 0; j < n - i - 1; j++) {
        //         if (sortedList[j].getSalary() > sortedList[j + 1].getSalary()) {
        //             // Swap employees
        //             const temp = sortedList[j];
        //             sortedList[j] = sortedList[j + 1];
        //             sortedList[j + 1] = temp;
        //         }
        //     }
        // }
        return sortedList;
    }

    public sortByName(employeeList: Employee[]): Employee[]{
        const sortedList = [...employeeList]; // Create a shallow copy
        // const n = sortedList.length;

        // // Insertion Sort Algorithm
        // for (let i = 1; i < n; i++) {
        //     const current = sortedList[i];
        //     let j = i - 1;
        //     while (j >= 0 && sortedList[j].getName().localeCompare(current.getName()) > 0) {
        //         sortedList[j + 1] = sortedList[j];
        //         j--;
        //     }
        //     sortedList[j + 1] = current;
        // }
        return sortedList;
    }
}