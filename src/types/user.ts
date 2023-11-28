export interface IUser {
    email: string;
    password: string;
    data?: 
    {   name: string,
        surname: string,
        birthday: Date
    }
}