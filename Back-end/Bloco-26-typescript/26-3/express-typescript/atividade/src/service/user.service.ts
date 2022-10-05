import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUsers } from '../interfaces/index';
import { NotFoundError } from 'restify-errors';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUsers[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<IUsers> {
    const user = await this.model.getById(id);
    return user;
  }

  public create(user: IUsers): Promise<IUsers> {
    return this.model.create(user);
  }

  public async update(id: number, user: IUsers): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, user);
  }

  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.remove(id);
  }

}

export default UserService;
