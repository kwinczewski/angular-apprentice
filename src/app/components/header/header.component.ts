import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule }  from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchText: string = "";
  @Output() searchTermEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  onSubmitSearch() {
    this.searchTermEmitter.emit(this.searchText);
    // console.log(this.searchText);
    this.searchText = this.searchText;
  }
}
