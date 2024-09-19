import { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { ToastContainer } from 'react-toastify'
import { Table } from '@radix-ui/themes'
// import { Button } from '@radix-ui/themes'
// import { Link } from 'react-router-dom'

export function Scenes() {
  const [scenes, setScenes] = useState([])

  useEffect(() => {
    const getScenes = async () => {
      return await instance.get('/scene')
      .then((response) => {
        setScenes(response.data)
      })
    }
    getScenes()
  }, [])

  return (
    <>
    <div className='card'>
      <h2>SCENES PAGE</h2>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Club ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Venue ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Event Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Cost</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Start At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>End At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {scenes && scenes.map(function(i: any){
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.id}</Table.Cell>
                <Table.Cell>{i.club_id}</Table.Cell>
                <Table.Cell>{i.venue_id}</Table.Cell>
                <Table.Cell>{i.title}</Table.Cell>
                <Table.Cell>{i.event_date}</Table.Cell>
                <Table.Cell>{i.description}</Table.Cell>
                <Table.Cell>{i.cost}</Table.Cell>
                <Table.Cell>{i.start_at}</Table.Cell>
                <Table.Cell>{i.end_at}</Table.Cell>
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
