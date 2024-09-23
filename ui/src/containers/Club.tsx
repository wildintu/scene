import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { Button, DataList, Heading, Grid, Flex } from '@radix-ui/themes'
import { useParams, useNavigate } from 'react-router-dom'

export function Club() {
  const [club, setClub] = useState()

  const [club_id, setClubId] = useState()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [website, setWebsite] = useState()
  
  const { id } = useParams()

  const navigate = useNavigate()

  const cancel = () => {
    navigate('/clubs')
  }

  const editClub = () => {
    navigate(`/clubs/${id}/edit`)
  }
  
  useEffect(() => {
    const getClub = async (id: any) => {
      return await instance.get(`/club/${id}`)
      .then((response) => {
        setClub(response.data)
        setClubId(response.data.club_id)
        setEmail(response.data.email)
        setName(response.data.name)
        setPhone(response.data.phone)
        setAddress(response.data.address)
        setCity(response.data.city)
        setState(response.data.state)
        setZip(response.data.zip)
        setWebsite(response.data.website)
      })
    }
    getClub(id)
  }, [])

  if (club) {
      return (
        <>
        <Grid className='card container'>
          <Heading size={'4'}>{name}</Heading>
        <Flex gap={'3'}>
            <DataList.Root>
              <DataList.Item align='center'>
                  <DataList.Label>ID</DataList.Label>
                  <DataList.Value>{id}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Club ID</DataList.Label>
                  <DataList.Value>{club_id}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Email</DataList.Label>
                  <DataList.Value>{email}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Name</DataList.Label>
                  <DataList.Value>{name}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Phone</DataList.Label>
                  <DataList.Value>{phone}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Address</DataList.Label>
                  <DataList.Value>{address}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>City</DataList.Label>
                  <DataList.Value>{city}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>State</DataList.Label>
                  <DataList.Value>{state}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Zip</DataList.Label>
                  <DataList.Value>{zip}</DataList.Value>
              </DataList.Item>
              <DataList.Item align='center'>
                  <DataList.Label>Website</DataList.Label>
                  <DataList.Value>{website}</DataList.Value>
              </DataList.Item>
            </DataList.Root>
        </Flex>
          <Flex gap={'3'} direction={'column'}>
            <Button variant='solid' onClick={ editClub }>Edit Club</Button>
            <Button variant='soft' onClick={ cancel }>Cancel</Button>
          </Flex>
        </Grid>
        </>
      )
    }
  }
