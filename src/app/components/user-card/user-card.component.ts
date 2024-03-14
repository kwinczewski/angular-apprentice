import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../user-int';
import { DatePipe, CommonModule } from '@angular/common';
import { DisplayModalService } from '../../services/display-modal.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [DatePipe, CommonModule, ButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: User = {} as User;
  @Output() dataEmiter: EventEmitter<User> = new EventEmitter<User>();
  public imagePath: string = 'assets/istockphoto-1130884625-612x612.jpg';

  constructor(private modalService: DisplayModalService) {}

  public openModal(): void {
    this.modalService.openModal();
    this.dataEmiter.emit(this.user);
  }
}
