import { useState, useEffect } from 'react';

const CLIENT_ID = "863b560bcdb644b498038d8fcdf368e7";
const CLIENT_SECRET = "6f270677fe3b430c8d72bd6578d5ab1c";

const ApiConnect = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&scope=playlist-modify-public'
        }
        fetch('https://accounts.spotify.com/api/token', authParameters).then(result => result.json()).then(data => setAccessToken(data.access_token))
    }, []);
    return accessToken;
};

export default ApiConnect;