import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {
    constructor(){
        super();
        this.name = "FullTimeEmployee"
        this.salary = 50000;
    }
}