// login.tsx
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Tab, Tabs, Box, Button } from '@mui/material';
import useCustomForm from '../../hook/useForm/useCustomForm';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const { register, handleSubmit, errors } = useCustomForm();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();  // Use useNavigate em vez de useHistory

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const onSubmitForm = (data: any) => {
    console.log(data);

    // Inspect each property of the data object
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}:`, value);
    });

   // Redireciona para a página principal
   navigate('/');  // Use navigate para redirecionar para a página desejada
  };

  return (
    <div className='container-form'>
      <h1 className='title-customer'>FAÇA SEU LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box className='container-box-primary'>
          <Tabs
            className='container-tabs'
            orientation='vertical'
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <Tab label="Dados para acesso" />
            {/* <Tab label="Digite sua senha" /> */}
          </Tabs>

          {value === 0 && (
            <Box p={3} className='container-dados'>
              <div className='text' >
                <TextField fullWidth label="Email" {...register('email', { required: 'Campo obrigatório' })} />
                {errors.email && <p>{errors.email.message}</p>}

                <TextField fullWidth label="Password" type= "password" {...register('password', { required: 'Campo obrigatório' })} />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
            </Box>
          )}
        </Box>

        <div className='button'>
          <Button className='button-form-dados' type="submit" variant="contained" color="primary">
            Finalizar Cadastro
          </Button>
        </div>
      </form>
    </div>
  );
}
