import { useState, useContext } from 'react'
import { Button, TextField, Heading, Text } from '@radix-ui/themes'
import instance from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth'


export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useContext(AuthContext)

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  
  const navigate = useNavigate()
  
  const submitLogin = async () => {
    try{
      const resp = await instance.post('/login', { email, password })
      if (resp.status == 200) {
        const jwt = resp.data
        login(jwt)
        navigate('/dashboard')
      } else {
        console.log(resp.data)
      }

    } catch (error) {
      console.log('catch')
      console.log(error)
    } finally {
      console.log('finally')
    }

    return (
      console.log('made it!')
    )
  }
  
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const validatePassword = (password: string): boolean => {
    return password.length >= 8
  }
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      alert('Please enter a valid email address')
      return
    }
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long.')
      return
    }
    await submitLogin()
  }
  
  
  return (
    <>
    <div className='align-center'>
        <div data-testid='login-page' className='login'>
        <Heading m='10px'>Welcome to Scene</Heading>
        <Text className='heading'>Please continue with your email and password.</Text>
        <form onSubmit={handleSubmit}>
          <TextField.Root id='login-email' className='input-fields' size="2" placeholder='Email' data-testid='login-email' onChange={updateEmail} />
          <TextField.Root id='login-password' className='input-fields' size="2" placeholder='Password' data-testid='login-password' onChange={updatePassword} />
          <Button id='login-submit' className='button' type='submit' data-testid='login-submit'>Submit</Button>
        </form>
        </div>
    </div>
    </>
  )
}
