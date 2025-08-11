import { HeaderSignInIcon, NotificationIcon, SearchIcon, SettingsIcon } from "../../assets/icons"
import Text from "../../components/Text"
import Authors from "../../modules/Authors"
import Projects from "../../modules/Projects"

const Tables = () => {
 
  return (
    <div className="w-full pt-[40px] h-[100vh] overflow-y-auto">
    <div className="flex justify-between items-center">
    <div className="flex flex-col ">
    <Text>Pages <span className="text-[#FFFFFF] ">/Tables</span></Text>
    <Text classList={"text-[#FFFFFF]"}>Tables</Text>
    </div>
    <div className="flex gap-[18px] items-center cursor-pointer ">
    <label className="w-[199px] bg-[#141c45] rounded-xl flex items-center justify-between py-[10px] px-[12px]" >
     <SearchIcon/> 
      <input type="text" autoComplete="off" className="w-[85%] placeholder:text-[#A0AEC0] placeholder:text-[12px] outline-none text-[#A0AEC0] text-[14px]" placeholder="Type here..." />
     </label>
     <div className="flex gap-[4px] items-center cursor-pointer">
     <HeaderSignInIcon/>
     <Text>Sign in</Text>
     </div>
     <SettingsIcon/>
     <NotificationIcon/>
     </div>
    </div> 
    <div>
    <Authors/>
    <Projects/>
    </div>
    </div>

  )
}

export default Tables
