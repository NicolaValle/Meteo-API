import { IUser } from '../types/user';

const DUMMY_REGISTERED_USERS: IUser[] = [
  {
    email: 'test@test.com',
    password: 'password123',
    data: {
      name: 'test',
      surname: 'test',
      birthday: new Date('01/01/1990'),
    },
  },
  {
    email: 'nicola@test.com',
    password: 'nicola',
    data: {
      name: 'nicola',
      surname: 'valle',
      birthday: new Date('02/08/1994'),
    },
  },
];

export const checkForUser = ({ email, password }: IUser) =>
  DUMMY_REGISTERED_USERS.find(
    (u) => u.email === email && u.password === password
  )?.data;
