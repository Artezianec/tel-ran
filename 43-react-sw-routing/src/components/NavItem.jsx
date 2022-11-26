import React from 'react';

const NavItem = ({item,changePage}) => {
  return (
    <li onClick={() => changePage(item)} className="nav-item btn btn-danger mx-1">{item.title}</li>
  )
}

export default NavItem