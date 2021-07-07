import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import GenericInput from 'src/components/inputs/GenericInput';
import { ContainerWrapper } from './styles';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import InputCPF from 'src/components/inputs/InputCPF';
import RouterNames from 'src/routes/names';
import { useAuth } from 'src/context/AuthContext';

interface LoginFromData {
  cpf: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const { control, handleSubmit } = useForm<LoginFromData>({
    defaultValues: {
      cpf: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data: LoginFromData) => {
    signIn({ username: data.cpf, password: data.password });
    history.push(RouterNames.HOME);
  }, []);

  return (
    <>
      <Helmet>
        <title>Login | Sagu</title>
      </Helmet>
      <ContainerWrapper>
        <Container maxWidth="sm">
          <Card component="form" onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Box marginBottom={4}>
                <Typography color="textPrimary" variant="h1" gutterBottom>
                  Entrar
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                  gutterBottom
                >
                  Faça login na plataforma interna
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputCPF
                    control={control}
                    fullWidth
                    label="CPF"
                    name="cpf"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <GenericInput
                    control={control}
                    fullWidth
                    label="Senha"
                    name="password"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Entrar
              </Button>
            </CardActions>
          </Card>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default Login;
