import axios from 'axios';
import { ICityAPI, useCityArrayStore } from '../stores/stores';

export async function getCityByName({ cityName }: { cityName: string }) {
  return new Promise<ICityAPI[]>((resolve, reject) => {
    axios
      .get(
        //city name need to be inserted in q param of api req
        `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=147b1ccda52637b3e703a5c4451e2652`
      )
      .then((response) => {
        useCityArrayStore.setState(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
// export async function getCityByName({
//   cityName,
// }: {
//   cityName: string;
// }): Promise<ICityStore[]> {
//   try {
//     const response = await axios.get(
//       `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=147b1ccda52637b3e703a5c4451e2652`
//     );

//     console.log(response.data);
//     const cityArray: ICityStore[] = response.data;
//     return cityArray;
//   } catch (error) {
//     console.error(error);
//     // Puoi gestire l'errore in modo appropriato, ad esempio lanciando un nuovo errore o ritornando un array vuoto
//     throw new Error('Errore durante la chiamata API');
//   }
// }
