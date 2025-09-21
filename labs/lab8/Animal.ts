export default class Animal {

    private name: string = "Animal";
    private speed: number = 0;

    protected setSpeed(speed: number){
        this.speed = speed;
    }

    protected setName(name: string){
        this.name = name;
    }

    public getSpeed(): number{
        return this.speed;
    }

    public getName(): string{
        return this.name;
    }

}