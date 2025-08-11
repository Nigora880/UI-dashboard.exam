import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({item,activeNav,setActiveNav}) => {
    const {} = useState("/")

  return (
    <NavLink onClick={() => setActiveNav(item.path)} to={item.path} key={item.id} className={"flex items-center gap-[10px] font-normal text-[14px] text-[#FFFFFF]"}>
        {activeNav == item.path ? item.activeIcon : item.icon}
          <span>{item.title}</span>
    </NavLink>
  )
}

export default NavItem