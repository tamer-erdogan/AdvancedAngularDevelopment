import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { StoreModule } from '@ngrx/store';
import { demosFeatureKey, DemosReducer } from './store/reducers/demos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DemosEffects } from './store/effects/demos.effects';
import { RoutingComponent } from './samples/routing/routing/routing.component';
import { RoutingTargetComponent } from './samples/routing/routing-target/routing-target.component';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { LogoutComponent } from '../auth/components/logout/logout.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      {
        path: 'routing',
        component: RoutingComponent,
        children: [{ path: ':id', component: RoutingTargetComponent }]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    RoutingComponent,
    RoutingTargetComponent
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    AuthModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, DemosReducer),
    EffectsModule.forFeature([DemosEffects])
  ],
  providers: [SkillsService]
})
export class DemosModule {}
