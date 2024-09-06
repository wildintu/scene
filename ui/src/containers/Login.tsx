import { useState } from 'react'
import { Button, TextField, Heading, Text } from '@radix-ui/themes'
import instance from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import TokenUtils from '../utils/token'


export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value
    setEmail(event.target.value)
    console.log(email)
  }
  
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>, password: string) => {
    setPassword(event.target.value)
    console.log(password)
  }
  
  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false)

  const submitLogin = async () => {
    setIsLoading(true)
    try{
      const resp = await instance.post('/login', { email, password })
      if (resp.status == 200) {
            const jwt = resp.data
            localStorage.setItem('jwt', jwt)
            
            const clubData = jwtDecode(jwt)
            localStorage.setItem('club', JSON.stringify(clubData))
            
            TokenUtils.setClub(clubData)

            navigate('/dashboard')
          } else {
            console.log(resp.data)
          }
      } catch (error) {
        console.log('Login failed:', error)
      } finally {
        setIsLoading(false)
      }
  }
  
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const validatePassword = (password: string): boolean => {
    return password.length >= 8
  }
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      alert('Please enter a valid email address')
      return
    }
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long and contain uppercase and lowercase letters')
      return
    }
    await submitLogin()
  }
  
  
  return (
    <>
    <div className='align-center'>
        <div className='login'>
        <Heading m='10px'>Welcome to Scene</Heading>
        <Text className='heading'>Please continue with your email and password.</Text>
        <TextField.Root id='email' className='input-fields' size="2" placeholder='Email' onChange={updateEmail} />
        <TextField.Root id='password' className='input-fields' size="2" placeholder='Password' onChange={updatePassword} />
        <Button className='button' onClick={handleSubmit}>Submit</Button>
        </div>
    </div>
    </>
  )
}
