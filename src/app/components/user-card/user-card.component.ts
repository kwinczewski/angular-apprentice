import { Component, Input } from '@angular/core';
import { User } from '../../user-int';
import { DatePipe, CommonModule } from '@angular/common';
import { UseModalComponent } from '../use-modal/use-modal.component';
import { DisplayModalService } from '../../services/display-modal.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    UseModalComponent,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User = {} as User
  public imagePath: string = "assets/placeHolder.jpg";

  constructor(private modalService: DisplayModalService) {}
    
  public openModal(): void {
    this.modalService.openModal();
  }

}

