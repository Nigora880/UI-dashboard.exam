
const Heading = ({tag, children, classList}) => {
    if(tag == "h1"){
      return <h1 className={`${classList} font-bold text-[36px] text-[#FFFFFF]`}>{children}</h1>
    }
    else if(tag == "h2"){
       return <h2 className={`${classList} text-[30px] font-bold text-[#FFFFFF]`}>{children}</h2>
    }
    else if(tag == "h3"){
       return <h3 className={`${classList} text-[18px] font-semiBold text-[#FFFFFF]`}>{children}</h3>
    }
  }
  
  export default Heading