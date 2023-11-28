export interface ICity {
  cityName: string | null;
  location: {
    latitude: string | undefined;
    longitude: string | undefined;
  };
}
