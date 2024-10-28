import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  phone:string;
  cpf:number;
  date: Date;
  gender:string;
  cep: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
  email: string;
  password: string;
  confirmPassword: string;
  message: string;
  // Adicione mais campos e seus tipos conforme necessário
}

const useCustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Adicione aqui a lógica de envio do formulário, se necessário
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useCustomForm;
