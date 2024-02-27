export interface User{
    id?: number;
    name: string;
    surname: string;
    department: string;
    email: string;
    salary: number;
    startDate: Date;
    finishDate?: Date;
    liveUser: boolean;
}