import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxButtonComponent } from './ux-button/ux-button.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [UxButtonComponent],
  exports: [UxButtonComponent]
})
export class UxSystemModule {}
