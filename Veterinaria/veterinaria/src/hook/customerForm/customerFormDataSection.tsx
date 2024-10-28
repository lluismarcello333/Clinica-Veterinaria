import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Tab, Tabs, Box, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import useCustomForm from '../useForm/useCustomForm';

import './customerFormDataSection.css';

/* interface CustomerFormDataSectionProps {
    title?: string;
    register: any;
    errors: any;
    children?: React.ReactNode;
} */

const genders = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];

const CustomerFormDataSection: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useCustomForm();
  const [value, setValue] = React.useState(0);
  const [gender, setGender] = useState('');
  const [ufs, setUfs] = useState<string[]>([]);

  const [address, setAddress] = useState({
    street: '',
    district: '',
    city: '',
    uf: 'SP',
  });

  useEffect(() => {
    // Função para buscar as UF da API do IBGE
    const fetchUfs = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json();
        const ufList = data.map((uf: any) => uf.sigla);
        setUfs(ufList);
      } catch (error) {
        console.error('Erro ao buscar as UF:', error);
      }
    };

    fetchUfs(); // Chamando a função de busca ao montar o componente
  }, []); // O array vazio assegura que a função é chamada apenas uma vez, sem depender de variáveis de estado


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedGender = event.target.value as string;
    if (['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'].includes(selectedGender)) {
      setGender(selectedGender);
    }
  };
  
  

  const handleCepChange = async (cep: string) => {
    // Remover caracteres não numéricos do CEP
    const cleanCep = cep.replace(/\D/g, '');
  
    try {
      // Verificar se o valor de UF é válido
      if (address.uf) {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
  
        setAddress({
          street: data.logradouro || '',
          district: data.bairro || '',
          city: data.localidade || '',
          uf: data.uf || '',
        });
      } else {
        console.warn('Valor de UF inválido. A chamada à API ViaCEP foi evitada.');
      }
    } catch (error) {
      console.error('Erro ao buscar o endereço pelo CEP:', error);
    }
  };

  const onSubmitForm = (data: any) => {
   
    console.log(data);
  
    // Inspect each property of the data object
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}:`, value);
    });
  
   console.log(data);
  };
  

  return (
    <div className='container-form'>
      <h1 className='title-customer'>PRIMEIRA VEZ NO SITE? CADASTRE-SE</h1>
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
          <Tab label="Seus Dados" />
          <Tab label="Endereço" />
          <Tab label="Dados de Acesso" />
        </Tabs>

       
          {value === 0 && (
            <Box p={3} className='container-dados'>
              <div className='text' >
                <TextField fullWidth label="Nome" {...register('name', { required: 'Campo obrigatório' })} />
                {errors.name && <p>{errors.name.message}</p>}

                <TextField fullWidth label="DDD + Telefone ou Celular" {...register('phone', { required: 'Campo obrigatório' })} />
                {errors.phone && <p>{errors.phone.message}</p>}

                <TextField fullWidth label="CPF" {...register('cpf', { required: 'Campo obrigatório' })} />
                {errors.cpf && <p>{errors.cpf.message}</p>}

                <TextField fullWidth label="Data de Nascimento" {...register('date', { required: 'Campo obrigatório' })} />
                {errors.date && <p>{errors.date.message}</p>}

               {/*  <TextField fullWidth label="Gênero" {...register('gender', { required: 'Campo obrigatório' })} />
                {errors.gender && <p>{errors.gender.message}</p>} */}
                <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                <InputLabel id="gender-label">Gênero</InputLabel>
                <Select labelId="gender-label" {...register('gender', { required: 'Campo obrigatório' })} 
                onBlur={handleGenderChange} >

                {genders.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
                 </Select>
                 </FormControl>
              </div>
            </Box>
          )}

          {value === 1 && (
            <Box p={3} className='container-dados'>
              <div className='text' >
                <TextField fullWidth label="CEP" {...register('cep', { required: 'Campo obrigatório' })}
                onBlur={(e) => handleCepChange(e.target.value)} />
                {errors.cep && <p>{errors.cep.message}</p>}

                <TextField fullWidth label="Logradouro" {...register('street', { required: 'Campo obrigatório' })} />
                {errors.street && <p>{errors.street.message}</p>}

                <TextField fullWidth label="Número" {...register('number', { required: 'Campo obrigatório' })} />
                {errors.number && <p>{errors.number.message}</p>}

                <TextField fullWidth label="Complemento" {...register('complement', { required: 'Campo obrigatório' })} />
                {errors.complement && <p>{errors.complement.message}</p>}

                <TextField fullWidth label="Bairro" {...register('district', { required: 'Campo obrigatório' })} />
                {errors.district && <p>{errors.district.message}</p>}

                <TextField fullWidth label="Cidade" {...register('city', { required: 'Campo obrigatório' })} />
                {errors.city && <p>{errors.city.message}</p>}

              {/*   <TextField fullWidth label="UF" {...register('uf', { required: 'Campo obrigatório' })} />
                {errors.uf && <p>{errors.uf.message}</p>} */}
                <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                  <InputLabel id="uf-label">UF</InputLabel>
                  <Select labelId="uf-label" {...register('uf', { required: 'Campo obrigatório' })}>
                    {ufs.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Box>
          )}

          {value === 2 && (
            <Box p={3} className='container-dados'>
              <div className='text' >
                <TextField fullWidth label="Email" {...register('email', { required: 'Campo obrigatório' })} />
                {errors.email && <p>{errors.email.message}</p>}

                <TextField fullWidth label="Senha" type='password'{...register('password', { required: 'Campo obrigatório' })} />
                {errors.password && <p>{errors.password.message}</p>}

                <TextField fullWidth label="Confirme sua senha" type='password'{...register('confirmPassword', { required: 'Campo obrigatório' })} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
              </div>
            </Box>
          )}

      </Box>
     
      <div className='button'>
        <Button className='button-form-dados' type="submit" variant="contained" color="primary" >
          Finalizar Cadastro
        </Button>
      </div>
      </form>

    </div>

  );
};

export default CustomerFormDataSection;
