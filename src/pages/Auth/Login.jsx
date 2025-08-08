import { Link, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  RememberIcon,
  SignInIcon,
  SignUpIcon,
} from "../../assets/icons";
import { Heading, Text } from "../../components";
import Input from "../../components/Input";
import { Logo, Loading } from "../../assets/img";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate( )
  const [isLoading, setIsLoading] = useState(false) 
  const { registerData } = useContext(Context);
  const [cookies, setCookie] = useCookies(["token"]);

  function handleSubmitLogin(e) {
    setIsLoading(true)
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (!registerData) {
      if (data.email == "nigora@gmail.com" && data.password == "123") {
        setCookie("token", data);
        location.pathname = "/";
      }
    } else {
      if (
        data.email == registerData.email &&
        data.password == registerData.password
      ) {
        setCookie("token", registerData);
        location.pathname = "/";
      }
    }
  }
  return (
    <>
      <div className="flex justify-between h-[100vh] relative">
        <div className="w-[50%] login-bg flex flex-col items-center justify-center">
          <div className="flex justify-between items-center mx-auto liner w-[998px] p-[20px] absolute top-[20px] right-0 left-0 !border-[#757A8C] rounded-xl">
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
        <div className="w-[50%] log-bg flex flex-col pl-[103px] h-[100vh] overflow-y-auto">
          <Heading classList={"pt-[10px]"} tag={"h2"}>
            Nice to see you!
          </Heading>
          <Text>Enter your email and password to sign in</Text>
          <form
            className="flex flex-col"
            onSubmit={handleSubmitLogin}
            autoComplete="off"
          >
            <span className="text-[#FFFFFF] text-[14px] font-normal pt-[35px]">
              Email
            </span>
            <Input
              classList={"mt-[4px]"}
              name={"email"}
              type={"email"}
              placeholder={"Your email address"}
            />
            <span className="text-[#FFFFFF] text-[14px] font-normal pt-[25px]">
              Password
            </span>
            <Input
              classList={"mt-[4px] mb-[29px]"}
              name={"password"}
              type={"password"}
              placeholder={"Your password"}
            />
            <div className=" flex gap-[10px]">
              <RememberIcon />
              <Text classList={"!text-[#FFFFFF] text-[18px]"}>Remember me</Text>
            </div>
            <Button>
              {isLoading ? (
                <img
                  className="mx-auto scale-[1.3]"
                  src={Loading}
                  alt="loading"
                  width={30}
                  height={30}
                />
              ) : (
                "SIGN IN "
              )}
            </Button>
          </form>
          <div className="flex gap-[5px]">
          <Text>Don't have an account?<span onClick={() => navigate("/register")} className="text-white font-bold text-[14px] cursor-pointer">  Sign up</span></Text>
          </div>
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

export default Login;
