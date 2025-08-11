import { useState } from 'react'
import { Logo } from '../assets/img'
import { routeList } from '../components/routeList'
import NavItem from '../components/NavItem'
import { Logout } from '../components'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/")
  return (
    <div className="m-[10px] relative body-bg w-[15%] h-[100vh] pt-[13px] py-[64px] rounded-3xl">
      <img className='mx-auto py-[23px]' src={Logo} alt="logo" width={130} height={14} />
      <nav className='flex flex-col gap-[13px] pl-[22px] pt-[20px]'>
      {routeList.map(item => <NavItem setActiveNav={setActiveNav} key={item.id} activeNav={activeNav} item={item}/>)}
      </nav>
      <Logout/>
    </div>
  )
}

export default Navbar
