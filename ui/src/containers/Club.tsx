// import { useEffect, useState } from 'react'
// import instance from '../utils/axios'
// import { TextField, Button } from '@radix-ui/themes'
// import { ToastContainer, toast } from 'react-toastify'
// import { Link } from 'react-router-dom'
// import { useNavigate, useParams } from 'react-router-dom'

// export function Club() {
//   const [club, setClub] = useState()

//   const [email, setEmail] = useState()
//   const [name, setName] = useState()
//   const [phone, setPhone] = useState()
//   const [address, setAddress] = useState()
//   const [city, setCity] = useState()
//   const [state, setState] = useState()
//   const [zip, setZip] = useState()
//   const [website, setWebsite] = useState()

//   const { id } = useParams()

//   const navigate = useNavigate()

//   const notify = (msg: string) => toast(msg)

//   useEffect(() => {
//     const getClub = async (id: any) => {
//       return await instance.get(`/club/${id}`)
//       .then((response) => {
//         setClub(response.data)
//         setEmail(response.data.email)
//         setName(response.data.name)
//         setPhone(response.data.phone)
//         setAddress(response.data.address)
//         setCity(response.data.city)
//         setState(response.data.state)
//         setZip(response.data.zip)
//         setWebsite(response.data.website)
//       })
//     }
//     console.log(id)
//     getClub(id)
//   }, [])

//   const handleEmailChange = (event: any) => {
//     setEmail(event.target.value)
//   }

//   const handleNameChange = (event: any) => {
//     setName(event.target.value)
//   }

//   const handlePhoneChange = (event: any) => {
//     setPhone(event.target.value)
//   }

//   const handleAddressChange = (event: any) => {
//     setAddress(event.target.value)
//   }

//   const handleCityChange = (event: any) => {
//     setCity(event.target.value)
//   }

//   const handleStateChange = (event: any) => {
//     setState(event.target.value)
//   }

//   const handleZipChange = (event: any) => {
//     setZip(event.target.value)
//   }

//   const handleWebsiteChange = (event: any) => {
//     setWebsite(event.target.value)
//   }

//   const clearFields = () => {
//     document.querySelectorAll('input').forEach(e => e.value = '')
//   }

//   const submitForm = async () => {
//     try {
//       const resp = await instance.put(`/clubs/${id}`, {
//         email,
//         name,
//         phone,
//         address,
//         city,
//         state,
//         zip,
//         website
//       })
//       if (resp.status == 200) {
//         notify('Successfully updated club!')
//         clearFields()
//         setEmail(email)
//         setName(name)
//         setPhone(phone)
//         setAddress(address)
//         setCity(city)
//         setState(state)
//         setZip(zip)
//         setWebsite(website)
//         navigate('/clubs')
//       } else {
//         notify('There was an error submitting form!')
//         console.log(resp)
//       }
//       } catch(err) {
//         console.log(err)
//       }
//     }

//   if (club) {
//     return (
//       <>
//       <div className='card'>
//         <h2>{name}</h2>
//       </div>
//       <div className='form'>
//         <TextField.Root size='2' placeholder='email' className='form-input' onChange={ handleEmailChange } value={ email } />
//         <TextField.Root size='2' placeholder='name' className='form-input' onChange={ handleNameChange } value={ name } />
//         <TextField.Root size='2' placeholder='phone' className='form-input' onChange={ handlePhoneChange } value={phone} />
//         <TextField.Root size='2' placeholder='address' className='form-input' onChange={ handleAddressChange } value={address} />
//         <TextField.Root size='2' placeholder='city' className='form-input' onChange={ handleCityChange } value={city} />
//         <TextField.Root size='2' placeholder='state' className='form-input' onChange={ handleStateChange } value={state} />
//         <TextField.Root size='2' placeholder='zip' className='form-input' onChange={ handleZipChange } value={zip} />
//         <TextField.Root size='2' placeholder='website' className='form-input' onChange={ handleWebsiteChange } value={website} />
//         <Button className='form-submit' onClick={ submitForm }>Update Club</Button>
//         <Link to={'/clubs'}><Button variant='outline' className='form-submit'>Cancel</Button></Link>
//       </div>
//         <ToastContainer position='top-center' />
//       </>
//     )
//   } else {
//     return <div>Club not found.</div>
//   }
// }
