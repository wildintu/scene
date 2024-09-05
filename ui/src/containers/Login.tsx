import { useState } from 'react'
import { Button, TextField, Heading, Text } from '@radix-ui/themes'
import instance from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import TokenUtils from '../utils/token'


export function Login() {
  const [email, setEmail] = useState()
  const updateEmail = (event: any) => {
    setEmail(event.target.value)
  }
  
  const navigate = useNavigate()

  const [password, setPassword] = useState()
  const updatePassword = (event: any) => {
    setPassword(event.target.value)
  }
  
  const submitLogin = async () => {
    const resp = await instance
      .post('/login', { email, password })
      .then((response) => {
        if (response.status == 200) {
          const jwt = response.data
          localStorage.setItem('jwt', jwt)
  
          const clubData = jwtDecode(jwt)
          localStorage.setItem('club', JSON.stringify(clubData))
          
          TokenUtils.setClub(clubData)
          navigate('/dashboard')
        } else {
          console.log(response.data)
        }
      })
    }
  
  return (
    <>
    <div className='align-center'>
        <div className='login'>
        <Heading m='10px'>Welcome to Scene</Heading>
        <Text className='heading'>Please continue with your email and password.</Text>
        <TextField.Root id='email' className='input-fields' size="2" placeholder='Email' onChange={updateEmail} />
        <TextField.Root id='password' className='input-fields' size="2" placeholder='Password' onChange={updatePassword} />
        <Button className='button' onClick={submitLogin}>Submit</Button>
        </div>
    </div>
    </>
  )
}
