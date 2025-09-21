import Animal from "./Animal";

export class SpeedController {

    public findWinner(animalList: Animal[]): void{

        if(!animalList || animalList.length === 0){
            console.log("No animal was found in the race!");
            return ;
        }
        let maxSpeed = -1;
        let winners: string[] = [];
        for(const animal of animalList){
            const currentSpeed = animal.getSpeed();

            if(currentSpeed > maxSpeed){
                maxSpeed = currentSpeed;
                winners = [animal.getName()];
            }
            else if(currentSpeed === maxSpeed){
                winners.push(animal.getName());
            }
        }
        if(winners.length === 1){
            console.log(`Winner is ${winners[0]}, with speed: ${maxSpeed}`);
        }
        else{
            console.log(`It's a tie! Winners are ${winners.join(", ")}, with speed: ${maxSpeed}`);
        }
    }

}