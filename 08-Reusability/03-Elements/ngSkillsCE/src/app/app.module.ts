import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, SkillsListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// @NgModule({
//   declarations: [SkillsListComponent],
//   imports: [BrowserModule, FormsModule],
//   entryComponents: [SkillsListComponent]
// })
// export class AppModule {
//   constructor(private injector: Injector) {}

//   ngDoBootstrap() {
//     const el = createCustomElement(SkillsListComponent, {
//       injector: this.injector
//     });

//     customElements.define('ngxe-skills', el);
//   }
// }
