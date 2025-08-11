import { BillingIcon, NavDashIcon, NavProIcon, NavSignInIcon, NavUpIcon, RTLIcon, TablesIcon } from "../assets/icons";
import { Billing, Dashboard, Profile, RTL, SignIn, SignUp, Tables } from "../pages/Dashboard";
import Heading from "./Heading";
import { PATH } from "./path";

export const routeList = [
    {
        id: 1,
        path: PATH.main,
        title: "Dashboard",
        icon: <NavDashIcon/>,
        activeIcon:<NavDashIcon/>,
        element: <Dashboard/>,
        children: []
    },
    {
        id: 2,
        path: PATH.tables,
        title: "Tables",
        icon: <TablesIcon/>,
        activeIcon:<TablesIcon/>,
        element: <Tables/>,
        children: []
    },
    {
        id: 3,
        path: PATH.billing,
        title: "Billing",
        icon: <BillingIcon/>,
        element: <Billing/>,
        children: []
    },
    {
        id: 4,
        path: PATH.rtl,
        title: "RTL",
        icon: <RTLIcon/>,
        element: <RTL/>,
        children: []
    },
    {
        id: 5,
        path: PATH.profile,
        title: "Profile",
        icon: <NavProIcon/>,
        element: <Profile/>,
        children: []
    },
    {
        id: 6,
        path: PATH.signIn,
        title: "Sign In",
        icon: <NavSignInIcon/>,
        element: <SignIn/>,
        children: []
    },
    {
        id: 7,
        path: PATH.signUp,
        title: "Sign Up",
        icon: <NavUpIcon/>,
        element: <SignUp/>,
        children: []
    },
]