import MainNavBar from "../components/base/mainnavbar";
import MainFooter from "../components/base/mainfooter";

const WithMainNavBarAndFooter = ({children, ...props}) => <>
    <MainNavBar {...props} />
    { children }
    <MainFooter />
</>

export default WithMainNavBarAndFooter;
