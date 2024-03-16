import { UsersService } from './../../services/users.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../user-int';
import {
  ModalLaunchService,
  ModalType,
} from '../../services/add-users.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddUserModalComponent {
  public modalVisible: boolean = false;
  public newUser: User = {} as User;
  private users: User[] = [];
  @Output() newUserAdded: EventEmitter<User> = new EventEmitter();
  public addUserForm: FormGroup = new FormGroup({});

  constructor(
    private modalService: ModalLaunchService,
    private userService: UsersService,
    private fb: FormBuilder,
  ) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.modalService.modalOpen$
      .pipe(filter((modalType) => modalType === ModalType.AddUser))
      .subscribe(() => {
        this.modalVisible = true;
      });
    this.addUserForm = this.createFormGroup(this.newUser);
    console.log();
  }

  public closeModal(): void {
    this.modalVisible = false;
  }

  public submitNewUser(): void {
    console.log(this.addUserForm.value);
    // this.closeModal();
    // this.newUser = {
    //   ...this.newUser,
    //   finishDate: undefined,
    //   liveUser: true,
    //   editUser: false,
    // };
    // this.userService.addNewUser(this.newUser).subscribe((newUser) => {
    //   this.newUserAdded.emit();
    //   this.newUser = {} as User;
    // });
  }

  private createFormGroup(userModel: User): FormGroup {
    const newUserGroup: any = {};
    Object.keys(userModel).forEach((key) => {
      const userKey = key as keyof User;
      if (userKey === 'id' || userKey === 'finishDate') {
        newUserGroup[userKey] = userModel[userKey] || null;
      } else {
        newUserGroup[userKey] = userModel[userKey];
      }
    });
    return this.fb.group(newUserGroup);
  }
}
