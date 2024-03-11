import { UserCardComponent } from './../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HeaderComponent } from '../components/header/header.component';
import { User } from '../user-int';
import { FilterPipe } from '../filter.pipe';
import { UserModalComponent } from '../components/user-modal/user-modal.component';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MatSlideToggle, 
    HeaderComponent,
    CommonModule,
    UserCardComponent,
    FilterPipe,
    UserModalComponent,
    HttpClientModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  public users: User[] = []
  searchText: string = ""
  userDataModal: User = {} as User;
  public imagePath: string = "assets/istockphoto-1130884625-612x612.jpg";

  public constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  aplySearch(term: string) {
    this.searchText = term;
  }

  transmitUserData(user: User): void {
    this.userDataModal = user;
  }

    
}