import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces/index';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUsers[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as IUsers[];
  }

  public async getById(id: number): Promise<IUsers> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE id=?', [id]);
    const [rows] = result;
    const [user] = rows as IUsers[];
    return user;
  }



  public async update(id: number, user: IUsers) {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=?, WHERE id=?',
      [name, email, password, id]
    );
  }

  public async create(user: IUsers): Promise<IUsers> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, email, password };
  }

  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id],
    );
  }
}