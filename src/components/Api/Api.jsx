import React, { useState, useEffect } from 'react';

const CLIENT_ID = " ";
const CLIENT_SECRET = " ";

const ApiConnect = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters).then(result => result.json()).then(data => setAccessToken(data.access_token))
    }, []);
    return accessToken;
};

export default ApiConnect;
