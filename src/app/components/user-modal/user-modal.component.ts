import { User } from './../../user-int';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs/operators';
import {
  ModalLaunchService,
  ModalType,
} from '../../services/add-users.service';
import { LanguageService } from 'typescript';

@Component({
  selector: 'app-use-modal',
  standalone: true,
  imports: [CommonModule, UserCardComponent, FormsModule, HttpClientModule],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class UserModalComponent implements OnInit {
  public modalVisible: boolean = false;
  @Input() userData: User = {} as User;
  @Output() deletedUser: EventEmitter<User> = new EventEmitter();
  private users: User[] = [];

  constructor(
    private modalService: ModalLaunchService,
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    this.modalService.modalOpen$
      .pipe(filter((modalType) => modalType === ModalType.ViewUserDetails))
      .subscribe(() => {
        this.modalVisible = true;
      });
  }

  public closeModal(): void {
    this.modalVisible = false;
  }

  public editUser(user: User) {
    this.userData.editUser = true;
  }

  public saveChanges(user: User): void {
    this.userData.editUser = false;
    this.userService.updateUser(user).subscribe((updatedUser) => {
      const index = this.users.findIndex((u) => u.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    });
  }

  public deleteCurrentUser(userData: User): void {
    this.closeModal();
    this.userData = { ...userData, finishDate: new Date() };
    this.userService.deleteUser(this.userData).subscribe();
    this.deletedUser.emit(this.userData);
  }
}
