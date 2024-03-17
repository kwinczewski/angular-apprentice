export class User {
  id?: number = 0;
  name: string = '';
  surname: string = '';
  department: string = '';
  email: string = '';
  salary: number = 0;
  startDate: Date = new Date();
  finishDate?: Date = undefined;
  liveUser: boolean = false;
  editUser: boolean = false;
}
