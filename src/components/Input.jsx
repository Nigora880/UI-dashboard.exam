const Input = ({classList, placeholder, type, name}) => {
    return <input name={name} type={type} className={`${classList} liner w-[350px] py-[15px]  rounded-full text-[#A0AEC0] px-[20px]`} placeholder={placeholder}/>
    
  }
  
  export default Input