import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { checkForCity } from '../utils/dummyBackend';
import { useCityStore } from '../stores/stores';
import { ICity } from '../types/city';

const fontStyle = {
  color: 'white',
  textShadow: '0px 5px 2px rgba(0,0,0,0.1)',
};
const CityHeader = ({ city }: { city: string }) => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '3px',
  };
  return (
    <div style={headerStyle}>
      <FaMapMarkerAlt color={'white'}></FaMapMarkerAlt>
      <Typography margin={0} fontSize={20} style={fontStyle}>
        {city}
      </Typography>
      <FaChevronRight
        color={'white'}
        onClick={() => {
          return console.log('scegli la città');
        }}
      ></FaChevronRight>
    </div>
  );
};

const InfoCard = ({
  city,
  weather,
  weatherDescription,
  temperature,
}: {
  city: string;
  weather: string;
  weatherDescription: string;
  temperature: number;
}) => {
  return (
    <>
      <div>
        <CityHeader city={city}></CityHeader>
        <Typography marginBottom={0} fontSize={40} style={fontStyle}>
          {weather}
        </Typography>
        <Typography marginTop={0} style={fontStyle}>
          {weatherDescription}
        </Typography>
        <Typography fontSize={50} style={fontStyle} marginBottom={0}>
          {temperature.toString().split('.')[0]}°C
        </Typography>
        <Typography marginTop={0} style={fontStyle}>
          Sunday | 12 Dec 2023
        </Typography>
        <FormControl variant="standard" style={fontStyle}>
          <InputLabel style={fontStyle}>City</InputLabel>
          <Select
            style={fontStyle}
            onChange={(e) => {
              const value: string = e.target.value as string;
              console.log(value);
              const cityLocation: ICity = {
                cityName: value,
                location: {
                  latitude: checkForCity({ cityName: value })?.latitude,
                  longitude: checkForCity({ cityName: value })?.longitude,
                },
              };
              useCityStore.setState({ cityData: cityLocation });
            }}
          >
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Rome">Rome</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default InfoCard;
