import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { ToastContainer } from 'react-toastify'
import { Table } from '@radix-ui/themes'
// import { Button } from '@radix-ui/themes'
// import { Link } from 'react-router-dom'

export function Venues() {
  const [venues, setVenues] = useState([])

  useEffect(() => {
    const getvenues = async () => {
      return await instance.get('/venue')
      .then((response) => {
        setVenues(response.data)
      })
    }
    getvenues()
  }, [])

  return (
    <>
    <div className='card'>
      <h2>VENUES PAGE</h2>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Venue ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>State</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Zip</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Website</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {venues && venues.map(function(i: any){
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.venue_id}</Table.Cell>
                <Table.Cell>{i.name}</Table.Cell>
                <Table.Cell>{i.phone}</Table.Cell>
                <Table.Cell>{i.email}</Table.Cell>
                <Table.Cell>{i.address}</Table.Cell>
                <Table.Cell>{i.city}</Table.Cell>
                <Table.Cell>{i.state}</Table.Cell>
                <Table.Cell>{i.zip}</Table.Cell>
                <Table.Cell>{i.website}</Table.Cell>
                <Table.Cell>{i.description}</Table.Cell>
                {/* <Table.Cell><Link to={`/club/${i.id}`}><Button color="cyan" variant="soft">Edit</Button></Link></Table.Cell>
                <Table.Cell><Button color="red" variant="soft" onClick={() => deleteClub(i.id)}>Delete</Button></Table.Cell> */}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
      <ToastContainer position='top-center' />
    </div>
    </>
  )
}
