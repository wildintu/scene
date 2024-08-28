import '@radix-ui/themes/styles.css'
import './App.css'

import { Nav } from './components/Nav'
import { Router } from './components/Routes'
import { Theme } from '@radix-ui/themes'

function App() {


  return (
    <>
      <Theme>
        <Nav />
        <Router />
      </Theme>
    </>
  )
}

export default App
