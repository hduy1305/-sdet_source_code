import Dog from "./Dog"
import Tiger from "./Tiger"
import Horse from "./Horse"
import { SpeedController } from "./SpeedController"

let dog = new Dog();
let tiger = new Tiger();
let horse = new Horse();

let controller = new SpeedController();

controller.findWinner([dog , tiger , horse]);