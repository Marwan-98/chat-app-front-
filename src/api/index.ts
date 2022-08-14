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

export const signIn =  (email:string, password:string) => {
    console.log(email, password)
    return axios.post("http://localhost:2000/user/login", { email, password })
}

export const getAllUsers =  () => {
  return axios.get("http://localhost:2000/user/all")
}



export const checkLogin = () => {
    return axios.get('http://localhost:2000/user/me', {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}