import { UserDatabase } from '../dataBase/userDataBase';
import { User } from '../types/User';

const database = new UserDatabase();

export const UseApi = () => ({
  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  },

  createUser(name: string, email: string, password: string) {
    const newUser: User = {
      id: this.generateId(),
      name: name,
      email: email,
      password: password,
    };

    const registeredUsers = database.getUsers();

    if ('users' in localStorage) {
      const matchedUser = registeredUsers.find(
        (user: User) => user.email === email && user.password === password,
      );

      if (matchedUser) {
        alert('This user already exists!');
        return false;
      }
    }

    database.addUser(newUser);
    return true;
  },

  isLogged(email: string, password: string) {
    const registeredUsers = database.getUsers();
    // localStorage.clear();

    if ('users' in localStorage) {
      const matchedUser = registeredUsers.find(
        (user: User) => user.email === email && user.password === password,
      );

      if (!matchedUser) alert('Incorrect email or password!');

      return matchedUser;
    }
  },
});
