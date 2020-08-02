import { Component } from '@angular/core';

@Component({
  selector: 'ng-demo-app-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-demo-ui';

  doClick() {
    console.log('you clicked');
  }
}
