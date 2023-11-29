import { Typography } from '@mui/material';

const fontStyle = {
  color: 'white',
  textShadow: '0px 5px 2px rgba(0,0,0,0.1)',
};

const CityHeader = ({ city }: { city: string }) => {
  const headerStyle = {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '3px',
  };
  return (
    <>
      <Typography margin={0} fontSize={20} style={fontStyle}>
        {city}
      </Typography>
    </>
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
      </div>
    </>
  );
};

export default InfoCard;
