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

    database.addUser(newUser);
  },

  isLogged(email: string, password: string) {
    const registeredUsers = database.getUsers();

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
