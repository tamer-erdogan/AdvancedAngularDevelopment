import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UxSystemModule } from '@ng-demo-app-ws/ux-system';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UxSystemModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
