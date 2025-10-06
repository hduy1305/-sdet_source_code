export default abstract class Employee {
    protected name: string = "Employee";
    // protected bonus: number = 0;
    protected salary: number = 0;

    protected setSalary(salary: number){
        this.salary = salary;
    }

    public getSalary(): number{
        return this.salary;
    }

    public getName(): string{
        return this.name;
    }

    // private validate() {
    //     console.log(`Please sign a contract as FullTimeEmployee or ContracEmployee`)
    // }
    
}