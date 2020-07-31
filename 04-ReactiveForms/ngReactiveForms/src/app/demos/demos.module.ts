import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { FormsBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { ReactiveValidationComponent } from './samples/reactive-validation/reactive-validation.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'reactiveforms', component: ReactiveFormsComponent },
      { path: 'formbuilder', component: FormsBuilderComponent },
      { path: 'formcontrol', component: FormControlComponent },
      { path: 'formarray', component: FormArrayComponent },
      { path: 'validation', component: ReactiveValidationComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    ReactiveFormsComponent,
    FormsBuilderComponent,
    FormControlComponent,
    FormArrayComponent,
    ReactiveValidationComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [],
})
export class DemosModule {}
