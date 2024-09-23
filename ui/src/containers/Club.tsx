import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { Button, DataList } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ClubForm } from '../containers/ClubForm'

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
        <div className='card'>
          <h2>{name}</h2>
          <div className='align-center'>
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
          </div>
        </div>
        <div>
          <Link to={`/clubs/${id}/edit`}><Button variant='soft' color='cyan'>Edit {name}</Button></Link>
        </div>
          <Link to={'/clubs'}><Button variant='outline' className='form-submit'>Cancel</Button></Link>
        </>
      )
    }
  }
