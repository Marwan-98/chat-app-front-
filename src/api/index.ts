import axios from 'axios';
import {  userInfo } from '../types';

export const signUser = async (values: userInfo) => {
    try {
        await axios.post('http://localhost:2000/user/add', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }).then((response: any) => {
            console.log(response)
            localStorage.setItem("token", response.data.token);
        })
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async (email:string, password:string) => {
    try {
    const response = await axios.post("http://localhost:2000/user/login", { email, password });
   console.log(response)
   localStorage.setItem("token", response.data.token);

    return response.data;
} catch (error) {
    console.log(error)
}
}


export const checkLogin = () => {
    return axios.get('http://localhost:2000/user/me', {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}