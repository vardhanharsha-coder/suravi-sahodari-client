import WithMainNavBar from "./withmainnavbar";
import MainFooter from "../components/base/mainfooter";

import SideBar from "../components/base/sidebar";

const WithMainNavBarAndSideBar = (props) => <>
    <WithMainNavBar>{<></>}</WithMainNavBar>
    <SideBar>
        { props.children }
    </SideBar>
    <MainFooter></MainFooter>
</>

export default WithMainNavBarAndSideBar;