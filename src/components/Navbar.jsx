import logo from '../Pokemon_Logo.png';
import Context from '../components/Context'
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom'

function Navbar() {
    const context = useContext(Context)
    const [redirect,setRedirect] = useState(false)

    function clickSearch() {
        const input = document.querySelector('#search');
        context.setContext(input.value)
        setRedirect(true)
    }

    return(
        redirect === false
        ?
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} width='150px'alt={logo}/>
                </a>
                <form className="container-fluid">
                    <div className='d-flex'>
                        <input id='search' className="form-control me-2" type="search" placeholder="Find your pokemon by its Name or Pokedex Number..." aria-label="Search" />
                        <button className="btn btn-success" type="button" onClick={clickSearch}>Search</button>
                    </div>
                </form>
            </div>
        </nav>
        : 
        <Redirect to='/pokemon' />
    )
}

export default Navbar;