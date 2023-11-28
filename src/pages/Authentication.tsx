import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { IUser } from '../types/user';
import { useNavigate } from 'react-router-dom';
import * as PATHS from '../constants/path';
import { useState } from 'react';
import { checkForUser } from '../utils/dummyBackend';
import { useAuthStore } from '../stores/stores';
import '@fontsource/roboto/500.css';
import GuestGuard from '../guards/GuestGuards';
import PageContainer from '../components/PageContainer';

const Authentication = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState<string>('nicola@test.com');
  const [passwordInput, setPasswordInput] = useState<string>('nicola');

  const checkUser = (userInputs: IUser) => {
    const findUser = checkForUser(userInputs);

    if (findUser) {
      useAuthStore.setState({ userData: findUser });
    }
    navigate(PATHS.WEATHER);
  };

  return (
    <GuestGuard>
      <PageContainer>
        <Typography fontSize={30} color={'white'} variant="h1">
          LOGIN TO SEE WEATHER FORECASTS!
        </Typography>
        <Stack
          component={'form'}
          alignItems={'center'}
          gap={'10px'}
          width={'100vw'}
          onSubmit={() => {
            checkUser({ email: emailInput, password: passwordInput });
          }}
        >
          <Paper elevation={3}>
            <TextField
              type="email"
              value={'nicola@test.com'}
              placeholder="Insert Email"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              required
            />
            <TextField
              type="text"
              value={'nicola'}
              placeholder="Insert Password"
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
              required
            />
            <Button type="submit">LOGIN</Button>
          </Paper>
        </Stack>
      </PageContainer>
    </GuestGuard>
  );
};

export default Authentication;
