export type Role="Admin"|"Representative"|"Customer";

export interface user{
    id:string;
    username:string;
    password:string;
    role:Role
}

