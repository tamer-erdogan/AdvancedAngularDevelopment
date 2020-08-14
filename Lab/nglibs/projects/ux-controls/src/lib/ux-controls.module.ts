import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { SplitComponent } from './controls/split/split.component';

const components = [SplitComponent, NavbarComponent];

@NgModule({
  declarations: components,
  imports: [MatToolbarModule, FlexLayoutModule],
  exports: components,
})
export class UxControlsModule {}
