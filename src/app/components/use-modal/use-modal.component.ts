import { Component, Input, OnInit, } from '@angular/core';
import { User } from '../../user-int';
import { CommonModule } from '@angular/common';
import { DisplayModalService } from '../../services/display-modal.service';

@Component({
  selector: 'app-use-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './use-modal.component.html',
  styleUrl: './use-modal.component.scss'
})
export class UseModalComponent implements OnInit {
  @Input() user: User = {} as User;
  modalVisible: boolean = false;

  constructor(private modalService: DisplayModalService) {}

  ngOnInit(): void {
    this.modalService.modalOpen$.subscribe((isOpen) => {
      this.modalVisible = isOpen;
      console.log(this.modalVisible)
    });
  }

  closeModal(): void {
    this.modalVisible = false;
  }

}
