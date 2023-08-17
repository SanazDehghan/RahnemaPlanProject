export type Role="Admin"|"Representative"|"Customer";

export interface user{
    id:string;
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    role:Role
}

