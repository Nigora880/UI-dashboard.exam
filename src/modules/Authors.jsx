import { useState } from 'react'
import {Hero} from "../assets/img"
import Heading from '../components/Heading'
import Text from '../components/Text'
import { DotsIcon } from '../assets/icons'
const Authors = ({item}) => {
    const [authorsList, setaAthorsList] = useState([
        {
          id:1,
          img:Hero, 
          fullname:"Esthera Jackson",
          email:"esthera@simmmple.com",
          who:"Manager",
          where:"Organization",
          status:"Online",
          data:"14/06/21",
        },
        {
          id:2,
          img:Hero, 
          fullname:"Alexa Liras",
          email:"alexa@simmmple.com",
          who:"Programmer",
          where:"Developer",
          status:"Offline",
          data:"14/06/21",
        },
        {
          id:3,
          img:Hero, 
          fullname:"Laurent Michael",
          email:"laurent@simmmple.com",
          who:"Executive",
          where:"Projects",
          status:"Online",
          data:"14/06/21",
        },
        {
          id:4,
          img:Hero, 
          fullname:"Freduardo Hill",
          email:"freduardo@simmmple.com",
          who:"Manager",
          where:"Organization",
          status:"Online",
          data:"14/06/21",
        },
        {
          id:5,
          img:Hero, 
          fullname:"Daniel Thomas",
          email:"daniel@simmmple.com",
          who:"Programmer",
          where:"Developer",
          status:"Offline",
          data:"14/06/21",
        },
        {
          id:6,
          img:Hero, 
          fullname:"Mark Wilson",
          email:"mark@simmmple.com",
          who:"Designer",
          where:"UI/UX Design",
          status:"Offline",
          data:"14/06/21",
        },
      ])
  return (
    <div className='w-full pt-[20px]'>
        <div className="flex flex-col bg-[#060B28BD] rounded-2xl">
       <Heading classList={"pt-[28px] pb-[23px] pl-[21px]"} tag={"h3"}>Authors Table</Heading>
       <div className="flex justify-between items-center text-start px-[20px]">
        <Text classList={"!text-[10px] w-[40%]"}>AUTHOR</Text>
        <Text classList={"!text-[10px] w-[20%]"}>FUNCTION</Text>
        <Text classList={"!text-[10px] w-[20%]"}>STATUS</Text>
        <Text classList={"!text-[10px] w-[20%]"}>EMPLOYED</Text>
        <Text classList={"!text-[10px] w-[20%]"}>  </Text>
       </div>

       <div className="border-b-[1px] border-[#56577A] pt-[10px]"></div>
       {authorsList.map(item =>
        <div key={item.id} className='flex pt-[11px] px-[20px] justify-between text-start items-start '> 
         <div className="w-[40%] flex text-start items-start my-[11px] gap-[11px]">
          <img className="h-[40px]" src={item.img} alt="hero img" width={40} height={40}/>
          <div className="flex flex-col items-start">
            <strong className='font-semibold text-white text-[10px]'>{item.fullname}</strong>
            <Text>{item.email}</Text>
          </div>
         </div>
         <div className="flex flex-col w-[20%]">
          <strong className='text-white'>{item.who}</strong>
          <Text>{item.where}</Text>
         </div>
         <div className="w-[20%]">
         <button className='h-[25px] w-[55px] justify-center items- rounded-full text-white bg-green-400'>{item.status}</button>
         </div>
         <strong className='text-white w-[20%] text-[15px] pt-[11px]'>{item.data}</strong>
         <div className="pr-[90px] w-[20%] pt-[11px]">
          <DotsIcon/>
         </div>
      </div>
        )}
        </div>
    </div>
  )
}

export default Authors
