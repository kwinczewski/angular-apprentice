import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../user-int';
import { AddUsersService } from '../../services/add-users.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AddUserModalComponent {
  public modalVisible: boolean = false;
  private user: User = {} as User;
  public newUser: User = {
    id: 0,
    name: '',
    surname: '',
    department: '',
    email: '',
    salary: 0,
    startDate: new Date(),
    finishDate: new Date(),
    liveUser: true,
    editUser: false,
  };
  private users: User[] = [];
  // public id?: number;
  // public name: string = '';
  // public surname: string = '';
  // public department: string = '';
  // public email: string = '';
  // public salary: number = 0;
  // public startDate: Date = new Date();
  // public finishDate?: Date = new Date();
  // public liveUser: boolean = true;
  // public editUser: boolean = false;

  constructor(
    private modalService: AddUsersService,
    private userService: UsersService,
  ) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((isOpen) => {
      this.modalVisible = isOpen;
    });
  }

  public closeModal(): void {
    this.modalVisible = false;
  }

  submitNewUser(): void {
    console.log(this.users.length);
  }
}
