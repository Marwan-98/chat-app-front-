import axios from 'axios';
import { chatMessage, userSign } from '../types';

export const signUser = async (values: userSign) => {
    try {
        await axios.post('http://localhost:2000/user/add', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }).then((response: any) => {
            localStorage.setItem("token", response.data.token);
        })
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (email: string, password: string) => {
    return axios.post("http://localhost:2000/user/login", { email, password })
}

export const getAllUsers = () => {
    return axios.get("http://localhost:2000/user/all")
}

export const getAllConversations = (email: string) => {
    return axios.post("http://localhost:2000/conversation/all", { email });
}

export const newCoversation = (userId: number, senderId: number) => {
    return axios.post("http://localhost:2000/conversation/newConv", { userId, senderId });
}

export const checkLogin = () => {
    return axios.get('http://localhost:2000/user/me', {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}

export const getAllMessages = (id: number) => {
    return axios.get(`http://localhost:2000/conversation/${id}`)
}

export const saveMessage = (message: chatMessage) => {
    return axios.post("http://localhost:2000/message/new", { body: message.body, userID: message.userID, conversationID: message.conversationID });
}