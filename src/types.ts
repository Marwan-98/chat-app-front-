export interface messagesDetails {
    body: string,
    date_created: string,
    date_updated: string,
    id: number,
    user: userInfo
}


export interface message {
    id?: number,
    body: string,
    date_created?: string,
    user: userInfo
}

export interface chatMessage {
    body: string,
    userID: number
    conversationID?: string
}

export interface conversation {
    users: userInfo[],
    messages: message[]
    id: string,
}

export interface userInfo {
    id: number
    data?: string,
    firstName: string
    lastName: string
    email: string
    password: string,
    conversations?: conversation[]
}

export interface userSign {
    data?: string,
    firstName: string
    lastName: string
    email: string
    password: string,
    conversations?: conversation[]
}

export interface userlogin {
    email: string
    password: string
}

export type User = {
    fullName: string;
    email: string;
    password: string;
    id: string;
  };
  