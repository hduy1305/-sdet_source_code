import Employee from "./Employee";

export default class ContractEmployee extends Employee{
    constructor(){
        super();
        this.name = "ContractEmployee"
        this.salary = 40000;
    }
}