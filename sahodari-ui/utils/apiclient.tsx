import axios from 'axios';

const APIClient = async (url, router) => {

    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (accessToken == undefined || refreshToken == undefined) {
        router.replace("/login");
        return;
    }

    let apiCall = (token) => axios.get(url, {
        headers: {
            "Authorization": `JWT ${token}`
        }
    });

    let tokenRefreshApiCall = axios.post('http://dev-api.sahodari.life/api/v1/token/refresh/', {
        refresh: refreshToken
    });

    const last_token_refresh_time: number = parseInt(localStorage.getItem("token_refresh_time"));
    const now = (new Date).getTime();

    if (last_token_refresh_time == undefined || isNaN(last_token_refresh_time) || now - last_token_refresh_time > 240000) {
        return await tokenRefreshApiCall.then(response => {
            localStorage.setItem("token_refresh_time", now.toString());
            if (response.status == 200) {
                localStorage.setItem("access_token", response.data['access']);
                localStorage.setItem("refresh_token", response.data['refresh']);
            }
            return apiCall(localStorage.getItem("access_token"));
        });
    } else {
        return apiCall(localStorage.getItem("access_token"));
    }

}

export default APIClient;