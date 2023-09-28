export interface User {
    email: string,
    password: string,
    credentials: {[key: string]: string},
    licenses_key?: Array<string>,
    avatar?: string,
    isAdmin?: boolean,
    status: Number,
    creditCard: {[key: string]: string},
}

export interface Product {
    name: string,
    releaseDate: Date,
    version: string,
    price: Number,
    pack: string,
    studentDiscounts?: boolean,
    specialDiscounts?: boolean,
    key: string,
}

export interface Payments {
    id: string
    recipient: User,
    sender: User,
    amount: Number,
}

export interface Message {
    id: Number,
    text: string,
    sender: User,
    recipient: string,
    content: Array<string>,
    reputation: Number,
    forum: string,
}

export interface Forum {
    topic: string,
    theme: string,
    tags: Array<string>,
}
