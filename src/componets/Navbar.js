import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header>
        <div>
            <nav>
                <a></a>
                <ul>
                    <li>
                        <Link to={"/"}>Register</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
