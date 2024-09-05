import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
  
  export const aInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  })
  
  // const [email, setEmail] = useState()
  // const updateEmail = (event: any) => {
  //   setEmail(event.target.value)
  // }
  
  // const [password, setPassword] = useState()
  // const updatePassword = (event: any) => {
  //   setPassword(event.target.value)
  // }
  
  // const submitLogin = async () => {
  //   const resp = await instance
  //     .post('/login', { email, password })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         const jwt = response.data
  //         localStorage.setItem('jwt', jwt)
  
  //         const clubData = jwtDecode(jwt)
  //         localStorage.setItem('club', JSON.stringify(clubData))
          
  //         TokenUtils.setClub(clubData)
  //         navigate('/dashboard')
  //       } else {
  //         console.log(response.data)
  //       }
  //     })
  //   }