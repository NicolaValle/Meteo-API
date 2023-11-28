import { create } from "zustand";
import { IUser } from "../types/user";
import { ICity } from "../types/city";

interface IAuthStore {
    userData: IUser['data'] | null
}

interface ICityStore {
    cityData: ICity | null
}

export const useAuthStore = create<IAuthStore>(() => ({
    userData: null,
}));

export const useCityStore = create<ICityStore>(() => ({
    cityData: {cityName:'Rome', location: {latitude: '41.902782', longitude: '12.496366'} },
}))

