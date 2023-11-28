import { ICity } from '../types/city';
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

const DUMMY_CITY_LIST: ICity[] = [
  {
    cityName: 'New York',
    location: {
      latitude: '40.730610',
      longitude: '-73.935242',
    },
  },
  {
    cityName: 'Rome',
    location: {
      latitude: '41.902782',
      longitude: '12.496366',
    },
  },
];

export const checkForUser = ({ email, password }: IUser) =>
  DUMMY_REGISTERED_USERS.find(
    (u) => u.email === email && u.password === password
  )?.data;
export const checkForCity = ({ cityName }: { cityName: string | null }) =>
  DUMMY_CITY_LIST.find((c) => c.cityName === cityName)?.location;
