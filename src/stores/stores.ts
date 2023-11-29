import { create } from 'zustand';
import { IUser } from '../types/user';
import { number } from 'yargs';

interface IAuthStore {
  userData: IUser['data'] | null;
}

export interface ICity {
  cityName: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface ILocalNames {
  [key: string]: string;
}

export interface ICityAPI {
  name: string;
  local_names: ILocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export const useAuthStore = create<IAuthStore>(() => ({
  userData: null,
}));

export const useCityArrayStore = create<ICityAPI[]>(() => []);
