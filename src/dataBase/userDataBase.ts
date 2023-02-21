import { User } from '../types/User';

export class UserDatabase {
  private users: User[] = [];

  constructor() {
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
      this.users = JSON.parse(usersJSON);
    }
  }

  addUser(user: User) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsers() {
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
      return JSON.parse(usersJSON);
    }
    return;
  }
}
