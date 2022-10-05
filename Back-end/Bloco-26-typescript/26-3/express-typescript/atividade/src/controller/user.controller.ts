import { Request, Response } from 'express';
import  statusCodes  from '../statusCodes';
import UserService from '../service/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const user = await this.userService.getAll();
    res.status(statusCodes.OK).json(user);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'user not found!'});
    }

    res.status(statusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(statusCodes.CREATED).json(userCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    await this.userService.update(id, user);

    res.status(statusCodes.NO_CONTENT).end();
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.remove(id);

    res.status(statusCodes.OK).json({ message: 'user deleted successfully' });
  };
}

export default UserController;