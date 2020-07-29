import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.scss']
})
export class MarblesComponent implements OnInit {
  title = 'MarbleDemo';

  users: string[] = [];

  private subscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.getUsers.subscribe(user => {
      this.users.push(user);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
