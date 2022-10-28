import React from 'react'
import { links } from '../utils/constants'
import Menu from './Menu'


const Navigation = ({ change }) => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {links.map((name, index) => <Menu change={change} key={name} name={name} />)}
            </ul>
        </nav>
    )
}

export default Navigation