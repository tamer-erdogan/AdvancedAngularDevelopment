import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxButtonComponent } from './ux-button/ux-button.component';
import { UxSplitComponent } from './ux-split/ux-split.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UxButtonComponent, UxSplitComponent],
  exports: [UxSplitComponent],
})
export class UxControlsModule {}
