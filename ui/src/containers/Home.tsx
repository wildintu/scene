import { Heading, Box } from '@radix-ui/themes'

export function Home() {

  return (
    <Box className='card'>
      <Heading className='padding' size={'8'} >Scene Club</Heading>
      <a href='http://localhost:5173/login'>
        <img src={'../../public/dogClubHomeImage.jpeg'} className='photo' />
      </a>
    </Box>
  )
}