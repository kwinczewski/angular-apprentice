import { UserCardComponent } from './../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HeaderComponent } from '../components/header/header.component';
import { User } from '../user-int';
import { Users } from '../mock-user-data';
import { FilterPipe } from '../filter.pipe';
import { UserModalComponent } from '../components/use-modal/user-modal.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatSlideToggle, 
    HeaderComponent,
    CommonModule,
    UserCardComponent,
    FilterPipe,
    UserModalComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  public users: User[] = []
  searchText: string = ""
  userDataModal: User | undefined;

  public constructor() {
    this.users = Users;
  }

  aplySearch(term: string) {
    this.searchText = term;
  }

  transmitUserData(user: User): void {
    this.userDataModal = user;
  }
}