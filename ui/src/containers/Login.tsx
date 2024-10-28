// import { useState, useContext } from 'react'
// import { Button, TextField, Heading, Text, Box } from '@radix-ui/themes'
// import instance from '../utils/axios'
// import { useNavigate } from 'react-router-dom'
// import AuthContext from '../context/auth'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export function Login() {
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          email="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            email="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}

// export function Login() {
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')
//   const { login } = useContext(AuthContext)

//   const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value)
//   }
  
//   const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value)
//   }
  
//   const navigate = useNavigate()
  
//   const submitLogin = async () => {
//     try{
//       const resp = await instance.post('/login', { email, password })
//       if (resp.status == 200) {
//         const jwt = resp.data
//         login(jwt)
//         navigate('/dashboard')
//       } else {
//         console.log(resp.data)
//       }

//     } catch (error) {
//       console.log('catch')
//       console.log(error)
//     } finally {
//       console.log('finally')
//     }

//     return (
//       console.log('made it!')
//     )
//   }
  
//   const validateEmail = (email: string): boolean => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return re.test(email)
//   }
  
//   const validatePassword = (password: string): boolean => {
//     return password.length >= 8
//   }
  
//   const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!validateEmail(email)) {
//       alert('Please enter a valid email address')
//       return
//     }
//     if (!validatePassword(password)) {
//       alert('Password must be at least 8 characters long.')
//       return
//     }
//     await submitLogin()
//   }
  
  
//   return (
//     <>
//     <Box>
//     <Heading m='10px'>Welcome to Scene</Heading>
//     <Text as='div' className='heading'>Please continue with your email and password.</Text>
//   </Box>
//     <div className='align-center'>
//         <div data-testid='login-page' className='login'>
//         <Heading m='10px'>Welcome to Scene</Heading>
        
//         <form onSubmit={handleSubmit}>
//           <TextField.Root id='login-email' className='input-fields' size="2" placeholder='Email' data-testid='login-email' onChange={updateEmail} />
//           <TextField.Root id='login-password' className='input-fields' size="2" placeholder='Password' data-testid='login-password' onChange={updatePassword} />
//           <Button id='login-submit' className='button' type='submit' data-testid='login-submit'>Submit</Button>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }
