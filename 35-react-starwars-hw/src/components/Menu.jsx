import React from 'react'

const Menu = ({ name, change }) => {
    return (
        <li onClick={() => change(name)} className="nav-item btn btn-danger mx-1"> {name} </li>
    )
}

export default Menu