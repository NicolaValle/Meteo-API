import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ICityAPI, useCityArrayStore } from '../stores/stores';
import { getCityByName } from '../HTTP/cityAPI';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ cityArray }: { cityArray: ICityAPI[] }) {
  const [filteredCityArray, setFilteredCityArray] = useState<ICityAPI[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = e.target.value;

    if (cityName.length >= 3) {
      try {
        const result = await getCityByName({ cityName });
        console.log(result);
        setFilteredCityArray(result);
        console.log(filteredCityArray);
      } catch (error) {
        console.error('Errore durante la chiamata:', error);
        setFilteredCityArray([]); // o gestisci l'errore come preferisci
      }
    } else {
      setFilteredCityArray([]);
    }
  };

  return (
    <>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <FaMapMarkerAlt color={'white'}></FaMapMarkerAlt>
          </SearchIconWrapper>
          <StyledInputBase
            onChange={handleInputChange}
            placeholder="Search city…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
      {filteredCityArray.map((e, index) => (
        <div key={index}>{e.name}</div>
      ))}
    </>
  );
}
