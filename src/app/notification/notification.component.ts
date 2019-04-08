import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../core/model/notification';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = []
  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    setInterval(()=>
        this.notificationService.getNotifications()
        .subscribe(notifications => {
          this.notifications = this.notifications.concat( notifications )
        }) 
    ,5000)
  }
}
