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

    const usersJSON = localStorage.getItem('users');
    console.log(usersJSON);

    if ('users' in localStorage) {
      const matchedUser = registeredUsers.find(
        (user: User) => user.email === email && user.password === password,
      );

      if (matchedUser) {
        alert('Este usuario já existente');
        return false;
      }
    }

    database.addUser(newUser);
    console.log(registeredUsers);
    return true;
  },

  isLogged(email: string, password: string) {
    const registeredUsers = database.getUsers();
    // localStorage.clear();

    if ('users' in localStorage) {
      const matchedUser = registeredUsers.find(
        (user: User) => user.email === email && user.password === password,
      );

      if (matchedUser) console.log('Login bem sucedido!');
      else console.log('Email ou senha incorretos!');

      return matchedUser;
    }
  },
});
