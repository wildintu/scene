// import { useContext } from 'react';
// import { TabNav } from '@radix-ui/themes';
// import AuthContext from '../context/AuthContext';

// function Nav() {
//   const { user, logout } = useContext(AuthContext);

//   const authenticatedLinks = () => {
//     return (
//       <div className='navbar'>
//         <TabNav.Root color="cyan">
//           <TabNav.Link className="navigation-link" href="/profile" active>Profile</TabNav.Link>
//           <TabNav.Link className="navigation-link" href="/animals">Available Animals</TabNav.Link>
//           <TabNav.Link className="logout-link" onClick={logout}>Logout</TabNav.Link>
//         </TabNav.Root>
//       </div>
//     )
//   }

//   const unauthenticatedLinks = () => {
//     return (
//       <div className='navbar'>
//         <TabNav.Root color="cyan">
//           <TabNav.Link className="login-link" href="/login" active>Home</TabNav.Link>
//           {/* <TabNav.Link href="/about">About</TabNav.Link>
//           <TabNav.Link href="/faq">FAQ</TabNav.Link> */}
//         </TabNav.Root>
//       </div>
//     )
//   }

//   return (
//     <>
//       {user ? authenticatedLinks() : unauthenticatedLinks() }
//     </>
//   )
// }

// export default Nav;