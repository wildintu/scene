import { Button, TextField, Heading, Text } from '@radix-ui/themes'

export function Login() {
  // const [email, setEmail] = useState()
  
  return (
    <>
    <div className='align-center'>
        <div className='login'>
        <Heading className='heading' >Welcome to Scene</Heading>
        <TextField.Root className='input-fields' size="2" placeholder='Email' />
        <TextField.Root className='input-fields' size="2" placeholder='Password' />
        <Button className='button'>Submit</Button>
        </div>
      </div>
    </>
  )
}