import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export enum ModalType {
  AddUser,
  ViewUserDetails,
}
@Injectable({
  providedIn: 'root',
})
export class ModalLaunchService {
  private modalOpenSubject = new Subject<ModalType>();
  modalOpen$ = this.modalOpenSubject.asObservable();

  constructor() {}

  openModal(modalType: ModalType): void {
    this.modalOpenSubject.next(modalType);
  }
}
// modal type enum
