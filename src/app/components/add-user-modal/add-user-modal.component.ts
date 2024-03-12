import { Component } from '@angular/core';
import { DisplayModalService } from '../../services/display-modal.service';
import { CommonModule } from '@angular/common';
import { User } from '../../user-int';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AddUserModalComponent {
  public modalVisible: boolean = false
  private user: User = {} as User

  constructor(private modalService: DisplayModalService) {

  }

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((isOpen) => {
      this.modalVisible = isOpen;
    });
  }

  public closeModal(): void {
    this.modalVisible = false
  }
  
  
}
