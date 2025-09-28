export default class Employee {
    protected name: string = "Employee";
    protected bonus: number = 0;
    protected salary: number = 0;

    // constructor(name: string){
    //     this.name = name;
    // }

    protected setSalary(salary: number){
        this.salary = salary;
    }

    public getSalary(): number{
        return this.salary;
    }

    public getName(): string{
        return this.name;
    }
    
}