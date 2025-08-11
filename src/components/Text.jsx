
const Text = ({children, classList}) => {
  return (
   <p className={`text-[14px] font-normal text-[#A0AEC0] ${classList}`}>{children}</p>
  )
}

export default Text
