import { User } from './../../user-int';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayModalService} from '../../services/display-modal.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-use-modal',
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent implements OnInit {
  public modalVisible: boolean = false;
  @Input() userData: User = {} as User;
  private users: User[] = []

  constructor(private modalService: DisplayModalService, private userService: UsersService) {}

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((isOpen) => {
      this.modalVisible = isOpen;
    });
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  editUser(user: User) {
    this.userData.editUser = true;
  }

  saveChanges(user: User): void {
    this.userData.editUser = false;
    this.userService.updateUser(user).subscribe(updatedUser => {
      const index = this.users.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    });
  }
  }
