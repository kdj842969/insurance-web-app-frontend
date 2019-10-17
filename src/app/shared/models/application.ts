import {Car} from './car';
import {Client} from './client';
import {Policy} from './policy';
import {User} from './user';

export class Application {
  id?: number;
  car?: Car;
  client?: Client;
  policy?: Policy;
  user?: User;
  applicationStatus: string;
}


