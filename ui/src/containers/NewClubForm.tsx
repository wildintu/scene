import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { TextField, Text, Button, Heading, Flex } from '@radix-ui/themes'
import * as Form from "@radix-ui/react-form";
import { ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export function NewClubForm() {
  const [club, setClub] = useState()

  const [club_id, setClubId] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [website, setWebsite] = useState()

  const { id } = useParams()

  const navigate = useNavigate()
  
  const handleClubIdChange = (event: any) => {
    setClubId(event.target.value)
  }
  
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }
  
  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }
  
  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value)
  }
  
  const handleAddressChange = (event: any) => {
    setAddress(event.target.value)
  }
  
  const handleCityChange = (event: any) => {
    setCity(event.target.value)
  }
  
  const handleStateChange = (event: any) => {
    setState(event.target.value)
  }
  
  const handleZipChange = (event: any) => {
    setZip(event.target.value)
  }
  
  const handleWebsiteChange = (event: any) => {
    setWebsite(event.target.value)
  }
  
  const clearFields = () => {
    document.querySelectorAll('input').forEach(e => e.value = '')
  }

  const newClub = async () => {
    const body = { id: Number, club_id: Number, email: String, password: String, name: String, phone: String, address: String, city: String, state: String, zip: Number, website: String }
    const response = await instance.post("/club/", body)
      .then((response) => {
            if (response.status == 200) {
                navigate('/clubs')
            }
            else {
                console.log(response.data);
            }
        })}
  
  const cancel = () => {
    navigate(`/clubs/`)
  }

  useEffect(() => {
    const getClub = async (id: any) => {
      return await instance.get(`/club/`)
      .then((response) => {
        setClub(club)
        setClubId(club_id)
        setEmail(email)
        setPassword(password)
        setName(name)
        setPhone(phone)
        setAddress(address)
        setCity(city)
        setState(state)
        setZip(zip)
        setWebsite(website)
      })
    }
    getClub(id)
  }, [])

    return (
      <Form.Root className='card container'>
          <Heading size={'3'}>Create New Club</Heading>
          <Text align='center' as ='div'>
            <TextField.Root size='2' placeholder='club id' className='form-input' onChange={ handleClubIdChange } value={ club_id } />
            <TextField.Root size='2' placeholder='email' className='form-input' onChange={ handleEmailChange } value={ email } />
            <TextField.Root size='2' placeholder='password' className='form-input' onChange={ handlePasswordChange } value={ password } />
            <TextField.Root size='2' placeholder='name' className='form-input' onChange={ handleNameChange } value={ name } />
            <TextField.Root size='2' placeholder='phone' className='form-input' onChange={ handlePhoneChange } value={ phone } />
            <TextField.Root size='2' placeholder='address' className='form-input' onChange={ handleAddressChange } value={ address } />
            <TextField.Root size='2' placeholder='city' className='form-input' onChange={ handleCityChange } value={ city } />
            <TextField.Root size='2' placeholder='state' className='form-input' onChange={ handleStateChange } value={ state } />
            <TextField.Root size='2' placeholder='zip' className='form-input' onChange={ handleZipChange } value={ zip } />
            <TextField.Root size='2' placeholder='website' className='form-input' onChange={ handleWebsiteChange } value={ website } />
          </Text>
          <Flex gap={'3'} direction={'column'}>
            <Button variant='solid' onClick={ newClub }>Submit</Button>
            <Button color="red" variant="soft" onClick={ clearFields }>Clear</Button>
            <Button variant='soft' onClick={ cancel }>Cancel</Button>
          </Flex>
        <ToastContainer position='top-center' />
      </Form.Root>
    )
  }
