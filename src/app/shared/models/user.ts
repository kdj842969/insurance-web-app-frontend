import {Application} from './application';
import {UserDetail} from './user-detail';

export class User {
  id?: number;
  username: string;
  password: string;
  userDetail?: UserDetail;
  applications: Application[];
}
