import { HeaderSignInIcon, NotificationIcon, SearchIcon, SettingsIcon } from "../../assets/icons"
import { img1, img10, img11, img2, img3, img4, img5, img6, img7, img8, img9 } from "../../assets/img"
import Text from "../../components/Text"

const Dashboard = () => {
  return (
    <div className="w-full pt-[40px] h-[100vh] overflow-y-auto">
      <div className="flex justify-between items-center">
      <div className="flex flex-col ">
      <Text>Pages <span className="text-[#FFFFFF] ">/Dashboard</span></Text>
      <Text classList={"text-[#FFFFFF]"}>Dashboard</Text>
      </div>
      <div className="flex gap-[18px] items-center cursor-pointer ">
      <label class="w-[199px] bg-[#141c45] rounded-xl flex items-center justify-between py-[10px] px-[12px]" >
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
      <div className="flex gap-[15px] py-[10px]">
         <img src={img1} alt="" width={360}/>
         <img src={img2} alt="" width={360}/>
         <img src={img3} alt="" width={360} />
         <img src={img4} alt="" width={360}/>
      </div>
      <div className="flex gap-[15px] py-[10px]">
        <img src={img5} alt="" width={620} />
        <img src={img6} alt="" width={310}/>
        <img src={img7} alt="" width={530}/>
      </div>
      <div className="flex gap-[15px] py-[10px]">
        <img src={img8} alt="" width={900}/>
        <img src={img9} alt="" width={580}/>
      </div>
      <div className="flex gap-[15px] py-[10px]">
      <img src={img10} alt="" width={980}/>
      <img src={img11} alt="" width={500} />
      </div>
    </div>
  )
}

export default Dashboard

