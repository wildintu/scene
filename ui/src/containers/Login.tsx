import { useContext, useState } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { Button, TextField, Heading, Text } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const { club, setClub, logout} = useContext(AuthContext)
  const notify = (msg: any) => toast(msg)

  const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  })

  const updateEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const updatePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const submitLogin = async () => {
    try {
      await instance
        .post('/login', { email, password })
        .then((response) => {
          if (response.status == 200) {
            const jwt = response.data
            localStorage.setItem('jwt', jwt)
            const clubData = jwtDecode(jwt)
            localStorage.setItem('club', JSON.stringify(clubData))

            setClub(clubData)
            navigate('/dashboard')
          } else {
            notify(response.data)
          }
        })
    } catch (error) {
      notify(error)
    }
  }
  
  return (
    <>
    <div className='align-center'>
        <div className='login'>
        <Heading m='10px'>Welcome to Scene</Heading>
        <Text className='heading'>Please continue with your email and password.</Text>
        <TextField.Root className='input-fields' size="2" placeholder='Email' onChange={updateEmail} />
        <TextField.Root className='input-fields' size="2" placeholder='Password' onChange={updatePassword} />
        <Button className='button' onClick={submitLogin}>Submit</Button>
        </div>
    </div>
    <ToastContainer />
    </>
  )
}