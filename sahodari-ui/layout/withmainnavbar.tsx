import MainNavBar from "../components/base/mainnavbar";

const WithMainNavBar = ({children, ...props}) => <>
    <MainNavBar {...props} />
    { children }
</>

export default WithMainNavBar;
