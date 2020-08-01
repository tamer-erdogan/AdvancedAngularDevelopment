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
import { ReactiveCascadeComponent } from './samples/reactive-cascade/reactive-cascade.component';
import { NgxFormlyComponent } from './samples/ngx-formly/ngx-formly.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'standard',
};

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'reactiveforms', component: ReactiveFormsComponent },
      { path: 'formbuilder', component: FormsBuilderComponent },
      { path: 'formcontrol', component: FormControlComponent },
      { path: 'async-pipe', component: AsyncPipeComponent },
      { path: 'formarray', component: FormArrayComponent },
      { path: 'validation', component: ReactiveValidationComponent },
      { path: 'cascade', component: ReactiveCascadeComponent },
      { path: 'ngx-formly', component: NgxFormlyComponent },
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
    ReactiveCascadeComponent,
    NgxFormlyComponent,
    AsyncPipeComponent,
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
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
})
export class DemosModule {}
