import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaTypes";


interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;