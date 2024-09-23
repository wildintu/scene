import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { Table } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'

export function Clubs() {
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    const getClubs = async () => {
      return await instance.get('/club')
      .then((response) => {
        setClubs(response.data)
      })
    }
    getClubs()
  }, [])

  return (
    <>
    <div className='card'>
      <h2>CLUBS PAGE</h2>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Club ID</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell> */}
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell> */}
            {/* <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell> */}
            <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>State</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>Zip</Table.ColumnHeaderCell> */}
            <Table.ColumnHeaderCell>Website</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {clubs && clubs.map(function(i: any){
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.id}</Table.Cell>
                <Table.Cell>{i.club_id}</Table.Cell>
                {/* <Table.Cell>{i.email}</Table.Cell> */}
                {/* <Table.Cell>{i.name}</Table.Cell> */}
                <Table.Cell><Link to={`/clubs/${i.id}`}>{i.name}</Link></Table.Cell>
                {/* <Table.Cell>{i.phone}</Table.Cell> */}
                {/* <Table.Cell>{i.address}</Table.Cell> */}
                <Table.Cell>{i.city}</Table.Cell>
                <Table.Cell>{i.state}</Table.Cell>
                {/* <Table.Cell>{i.zip}</Table.Cell> */}
                <Table.Cell>{i.website}</Table.Cell>
                <Table.Cell><Link to={`/clubs/${i.id}`}><Button color="cyan" variant="soft">View</Button></Link></Table.Cell>
                {/* <Table.Cell><Button color="red" variant="soft" onClick={() => deleteClub(i.id)}>Delete</Button></Table.Cell> */}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
    </>
  )
}
