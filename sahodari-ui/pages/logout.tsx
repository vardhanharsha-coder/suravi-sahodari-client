import {useRouter} from "next/router";
import {useEffect} from "react";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("token_refresh_time");
        router.replace("/login");
    }, []);
    return <></>;
}

export default Page;