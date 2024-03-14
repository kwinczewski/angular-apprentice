import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddUsersService } from '../../services/add-users.service';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    AddUserModalComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchText: string = '';
  @Output() searchTermEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private modalService: AddUsersService) {}

  onSubmitSearch() {
    this.searchTermEmitter.emit(this.searchText);
    this.searchText = this.searchText;
  }

  public openModal(): void {
    this.modalService.openModal();
  }
}
