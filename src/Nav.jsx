import {} from 'react'
import { NavLink } from 'react-router-dom'
import './css/Nav.css'

function Nav(){

  return(
    <nav className='nav'>
      <NavLink to='Exemplo1'>Exemplo1</NavLink>
      <NavLink to='Exemplo2'>Exemplo2</NavLink>
      <NavLink to='Exemplo3'>Exemplo3</NavLink>
    </nav>
  )
}

export default Nav