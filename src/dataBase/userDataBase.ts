import { User } from '../types/User';

export class UserDatabase {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }
}
