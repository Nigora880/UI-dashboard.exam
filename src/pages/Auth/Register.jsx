import { Link, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  FaceBookIcon,
  GoogleIcon,
  IosIcon,
  RememberIcon,
  SignInIcon,
  SignUpIcon,
} from "../../assets/icons";
import { Heading, Text } from "../../components";
import Input from "../../components/Input";
import { Logo, Loading } from "../../assets/img";
import Button from "../../components/Button";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setRegisterData } = useContext(Context);
  const navigate = useNavigate();
  const [_cookies, setCookie] = useCookies(["token"]);

  function handleRegisterSubmit(e) {
    setIsLoading(true)
    e.preventDefault();
    const data = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setRegisterData(data);
    navigate("/login");
  }
  return (
    <>
      <div className="flex justify-between h-[100vh] relative">
        <div className="w-[50%] login-bg flex flex-col items-center justify-center">
          <div className="flex justify-between items-center mx-auto liner w-[998px] p-[15px] absolute top-[20px] right-0 left-0 !border-[#757A8C] rounded-xl">
            <img src={Logo} alt="logo img" />
            <div className=" flex gap-[30px]">
              <div className="flex gap-[5px]">
                <DashboardIcon />
                <Link
                  className="font-bold text-[10px] text-[#FFFFFF]"
                  to={"/dashboard"}
                >
                  DASHBOARD
                </Link>
              </div>
              <div className="flex gap-[5px]">
                <DashboardIcon />
                <Link
                  className="font-bold text-[10px] text-[#FFFFFF]"
                  to={"/profile"}
                >
                  PROFILE
                </Link>
              </div>
              <div className="flex gap-[5px]">
                <SignUpIcon />
                <Link
                  className="font-bold text-[10px] text-[#FFFFFF]"
                  to={"/sign up"}
                >
                  SIGN UP
                </Link>
              </div>
              <div className="flex gap-[5px]">
                <SignInIcon />
                <Link
                  className="font-bold text-[10px] text-[#FFFFFF]"
                  to={"/sign in"}
                >
                  SIGN IN
                </Link>
              </div>
            </div>
            <button className="w-[150px] py-[10px] rounded-2xl bg-[#0075FF] text-[10px] font-bold text-[#FFFFFF]">
              Free Download
            </button>
          </div>
          <Text classList={"!text-[20px] !mb-[16px] text-[#FFFFFF]"}>
            INSPIRED BY THE FUTURE:
          </Text>
          <Heading tag={"h1"}>THE VISION UI DASHBOARD</Heading>
        </div>
        <div className="w-[50%] log-bg flex flex-col pl-[103px] h-[100vh] overflow-y-auto py-25">
          <Heading classList={"pt-[10px]"} tag={"h2"}>
            Welcome!
          </Heading>
          <Text>
            Use these awesome forms to login or create new <br /> account in
            your project for free.
          </Text>
          <form
            className="mt-[55px] flex flex-col w-[350px] rounded-2xl border-[2px] border-white justify-center text-center"
            onSubmit={handleRegisterSubmit}
            autoComplete="off"
          >
            <Heading classList={"pt-[30px]"} tag={"h3"}>
              Register with
            </Heading>
            <div className="flex gap-[10px] px-[60px] py-[20px]">
              <div className="w-[65px] flex justify-center items-center h-[65px] rounded-2xl border-[2px] border-white">
                <FaceBookIcon />
              </div>
              <div className="w-[65px] flex justify-center items-center h-[65px] rounded-2xl border-[2px] border-white">
                <IosIcon />
              </div>
              <div className="w-[65px] flex justify-center items-center h-[65px] rounded-2xl border-[2px] border-white">
                <GoogleIcon />
              </div>
            </div>
            <span className="text-[#A0AEC0] pb-[20px]">or</span>
            <div className="flex flex-col text-start">
              <span className="text-[#FFFFFF] pl-[25px] pb-[2px]">Name</span>
              <Input
                classList={"!w-[300px] mx-auto !py-[10px] pb-[20px]"}
                type={"text"}
                placeholder={"Your full name"}
              />
              <span className="text-[#FFFFFF] pl-[25px] pb-[2px]">Email</span>
              <Input
                classList={"!w-[300px] mx-auto !py-[10px] pb-[20px]"}
                type={"email"}
                placeholder={"Your email address"}
              />
              <span className="text-[#FFFFFF] pl-[25px] pb-[2px]">
                Password
              </span>
              <Input
                classList={"!w-[300px] mx-auto !py-[10px] pb-[20px]"}
                type={"password"}
                placeholder={"Your password"}
              />
            </div>
            <div className="flex gap-[10px] pt-[24px]">
              <RememberIcon />
              <Text classList={"!text-[#FFFFFF] text-[18px]"}>Remember me</Text>
            </div>
            <Button classList={"!w-[300px] mx-auto"}>
              {isLoading ? (
                <img
                  className="mx-auto scale-[1.3]"
                  src={Loading}
                  alt="loading"
                  width={30}
                  height={30}
                />
              ) : (
                "SIGN UP "
              )}
            </Button>
            <div className="flex gap-[5px] mx-auto">
              <Text>Don't have an account?<span onClick={() => navigate("/login")} className="text-white font-bold text-[14px] cursor-pointer">Sign in</span></Text>
            </div>
          </form>
          <div className=" !mt-20">
            <Text classList={"!mt-[100px] "}>
              @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
            </Text>
            <div className="flex gap-[15px] justify-around w-[300px]">
              <Text>Marketplace</Text>
              <Text>Blog</Text>
              <Text>License</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
