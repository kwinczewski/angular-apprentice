import { Component, Input, OnInit, } from '@angular/core';
import { User } from '../../user-int';
import { CommonModule } from '@angular/common';
import { DisplayModalService } from '../../services/display-modal.service';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-use-modal',
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent implements OnInit {
  modalVisible: boolean = false;
  @Input() userData: User | undefined;

  constructor(private modalService: DisplayModalService) {}

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((isOpen) => {
      this.modalVisible = isOpen;
    });
  }

  closeModal(): void {
    this.modalVisible = false;
    console.log("I've been presed")
  }

}
