import { Button, TextField, Heading, Text } from '@radix-ui/themes';

export function Login() {
  // const [email, setEmail] = useState();
  
  return (
    <>
    <div className='align-center'>
        <div className='login'>
        <h3>LOGIN</h3>
        <TextField.Root className='input-fields' size="2" placeholder='Email' />
        <TextField.Root className='input-fields' size="2" placeholder='Password' />
        <Button>Submit</Button>
        </div>
      </div>
    </>
  )
}