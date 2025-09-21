
export default class Employee {
    private salary: number; //de ngoai nay

    constructor(salary: number){
        this.salary = salary; //can init trong nay
    }

    public getSalary(){ // tra ve kieu gia tri number getSalary(): number{}
        return this.salary;
    }
}
