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
  Validators,
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
  public newUser: User = new User();
  private users: User[] = [];
  @Output() newUserAdded: EventEmitter<User> = new EventEmitter();
  public addUserForm: FormGroup;
  // private newUserDataKeys: (keyof User)[] = [];

  constructor(
    private modalService: ModalLaunchService,
    private userService: UsersService,
    private fb: FormBuilder,
  ) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.addUserForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.modalService.modalOpen$
      .pipe(filter((modalType) => modalType === ModalType.AddUser))
      .subscribe(() => {
        this.modalVisible = true;
      });

    this.addUserForm = this.fb.group(
      Object.keys(this.newUser).reduce(
        (acc, key) => {
          if (key === 'email') {
            acc[key as keyof User] = ['', Validators.required];
          } else {
            acc[key as keyof User] = ['', Validators.required];
          }
          return acc;
        },
        {} as Record<keyof User, any>,
      ),
    );
  }

  public closeModal(): void {
    this.modalVisible = false;
  }

  public submitNewUser(): void {
    console.log(this.addUserForm.value);
    this.closeModal();
    this.newUser = {
      ...this.newUser,
      finishDate: undefined,
      liveUser: true,
      editUser: false,
    };
    this.userService.addNewUser(this.newUser).subscribe((newUser) => {
      this.newUserAdded.emit();
      this.newUser = {} as User;
    });
  }
}
