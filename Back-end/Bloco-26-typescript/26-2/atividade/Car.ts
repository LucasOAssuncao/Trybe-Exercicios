class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk(): void {
    console.log('WUOOOOOOOOOOOOOOOON!!!!');
  }

  turnOn(): void {
    console.log('Engine Started');
  }

  turnOff(): void {
    console.log('Engine Stopped');
  };

  speedUp(): void {
    console.log('speed up');
  };

  speedDown(): void {
    console.log('speed down');
  }

  stop(): void {
    console.log('Stoped');
  }

  turn(direction: string): void {
    console.log(`turning to  ${direction}`);
  }
}
