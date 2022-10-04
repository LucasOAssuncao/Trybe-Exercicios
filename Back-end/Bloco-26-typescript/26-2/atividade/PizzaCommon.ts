import Pizza from "./Pizza";
import { Common } from "./PizzaTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;