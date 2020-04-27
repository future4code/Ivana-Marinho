import React from 'react';

const baseUrl = "";

export const logIn = (email, password) => async (dispatch) => {
    const response = await Axios.post(
        `$${baseUrl}/login`,
    {
        email,
        password
    }
    )
    window.localStorage.setItem("token", response.data.token);
}