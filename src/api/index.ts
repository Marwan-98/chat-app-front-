import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setConversations } from '../redux/reducer/conversationsState';
import { setUsers } from '../redux/reducer/usersState';
import { setUser } from '../redux/reducer/userState';
import { chatMessage, userSign } from '../types';

export const signUser = async (values: userSign) => {
    try {
        await axios.post('http://localhost:2000/user/add', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }).then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data.newUser));
            localStorage.setItem("token", response.data.token);
        })
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (email: string, password: string, dispatch: Dispatch) => {
    return axios.post("http://localhost:2000/user/login", { email, password }).then((res) => {
        localStorage.setItem("token", res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("conversations", JSON.stringify(res.data.user.conversations));
        dispatch(setUser(res.data.user));
      })
}

export const getAllUsers = (dispatch: Dispatch) => {
    axios.get("http://localhost:2000/users/all", {
        headers: {
            auth: localStorage.getItem("token")!
        }}).then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data));
        dispatch(setUsers(res.data))
      })
}

export const getAllConversations = (email: string, dispatch: Dispatch) => {
    try {
        axios.post("http://localhost:2000/conversation/all", { email }, {
            headers: {
                auth: localStorage.getItem("token")!
            }
        }).then((response) => {
            dispatch(setConversations(response.data));
        })
    } catch (err) {
        console.log(err)
    }
}

export const newCoversation = (userId: number, senderId: number) => {
    return axios.post("http://localhost:2000/conversation/newConv", { userId, senderId }, {
        headers: {
            auth: localStorage.getItem("token")!
        }
    });
}

export const newGroup = (title: string, users: number[], senderId: number) => {
    return axios.post("http://localhost:2000/conversation/group", { title, users, senderId }, {
        headers: {
            auth: localStorage.getItem("token")!
        }
    });
}

export const checkLogin = () => {
    return axios.get('http://localhost:2000/user/me', {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}

export const getAllMessages = (id: number, dispatch: Dispatch) => {
    return axios.get(`http://localhost:2000/conversation/${id}`, {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}

export const saveMessage = (message: chatMessage, dispatch: Dispatch) => {
    return axios.post("http://localhost:2000/message/new", { body: message.body, userID: message.userID, conversationID: message.conversationID }, {
        headers: {
            auth: localStorage.getItem("token")!
        }
    })
}