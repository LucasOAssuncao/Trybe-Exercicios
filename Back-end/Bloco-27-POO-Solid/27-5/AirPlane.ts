import { IAirPlane } from './interfaces/interfaces';

export default class AirPlane implements IAirPlane {
  fly(): void { console.log('Fly a airplane'); }
}