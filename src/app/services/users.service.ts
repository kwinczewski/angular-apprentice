import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-int';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:5000/users';
  private users: User[] = [];

  constructor(private http: HttpClient) {
    this.getUsers().subscribe((u) => (this.users = u));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  addNewUser(newUser: User): Observable<User> {
    newUser = { ...newUser, id: this.users.length + 1 };
    return this.http.post<User>(this.apiUrl, newUser);
  }

  deleteUser(toDeleteUser: User): Observable<User> {
    return this.http.delete<User>(this.apiUrl + `/${toDeleteUser.id}`);
  }
}
