export interface messagesDetails {
    body: string,
    date_created: string,
    date_updated: string,
    id: number,
    user: userInfo
}

export interface message {
    id: number,
    body: string,
    user: userInfo
}

export interface conversation {
    id: number,
    users: userInfo[],
    messages: message[]
}

export interface userInfo {
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
  