import { Injectable } from '@angular/core';
import { Notification } from './core/model/notification';
import { Observable, of } from 'rxjs';
import { NOTIFICATIONS } from './mock/mock-dish';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  getNotifications(): Observable<Notification[]>{
    return of(NOTIFICATIONS)
  }
}
