import { FluxStore } from '.';
import { User } from '../general';

export default class UserStore extends FluxStore {
  filter(filter: () => boolean, sort?: boolean): Record<string, User>;
  findByTag(username: string, discriminator: string): User;
  forEach(action: Function): void;
  getCurrentUser(): User;
  getUser(userId: string): User;
  getUsers(): Record<string, User>;
  initialize(): void;
}
