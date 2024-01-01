import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  SignUpContainer,
  SignUpForm,
  SignUpContent,
  SubmitButton,
} from './styles.ts'

interface ErrorNotifyProps {
  type: 'error' | 'warning' | 'info' | 'success'
  message: string
}

const newUserFormValidationSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  phoneNumber: z.number().min(1, 'Número é obrigatório'),
  reason: z.string().min(1, 'Razão Social é obrigatório'),
  cnpj: z.number().min(1, 'CPNJ é obrigatório.'),
})

type NewUserFormData = Zod.infer<typeof newUserFormValidationSchema>

export function SignUp() {
  const { register, handleSubmit } = useForm<NewUserFormData>({
    resolver: zodResolver(newUserFormValidationSchema),
  })

  const notify = ({ type, message }: ErrorNotifyProps) => {
    switch (type) {
      case 'error':
        toast.error(message, {
          toastId: 44,
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        break
      case 'info':
        toast.info(message, {
          toastId: 33,
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        break
      case 'warning':
        toast.warning(message, {
          toastId: 22,
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        break
      case 'success':
        toast.success(message, {
          toastId: 11,
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        break
    }
  }

  function handleCreateNewUser(data: NewUserFormData) {
    console.log(data)
  }

  return (
    <>
      <SignUpContainer>
        <SignUpContent>
          <h1>Crie um conta</h1>

          <SignUpForm onSubmit={handleSubmit(handleCreateNewUser)}>
            <label htmlFor="nameInput">
              Nome Pessoal
              <input
                type="text"
                placeholder="ex: Rafael Freitas Chaves"
                id="nameInput"
                {...register('name')}
              />
            </label>
            <label htmlFor="phoneNumberInput">
              Telefone
              <input
                type="number"
                placeholder="ex: 55 53 9997066414"
                id="phoneNumberInput"
                {...register('phoneNumber', { valueAsNumber: true })}
              />
            </label>
            <label htmlFor="reasonInput">
              Razão Social
              <input
                type="text"
                placeholder="ex: Edificar Brasil LTDA"
                id="reasonInput"
                {...register('reason')}
              />
            </label>
            <label htmlFor="cnpjInput">
              CNPJ
              <input
                type="number"
                maxLength={parseInt('12')}
                placeholder="ex: 123456-7"
                id="cnpjInput"
                {...register('cnpj', { valueAsNumber: true })}
              />
            </label>
            <p>Apenas números</p>

            <SubmitButton type="submit">Criar Conta</SubmitButton>
          </SignUpForm>
        </SignUpContent>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </SignUpContainer>
    </>
  )
}
