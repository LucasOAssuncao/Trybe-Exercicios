import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import { IUsers } from '../interfaces/index';

const properties = ['name', 'email', 'password'];

function validateProperties(user: IUsers): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(user: IUsers): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user: IUsers = req.body;

  let [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(user);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
}

export default validateValues;