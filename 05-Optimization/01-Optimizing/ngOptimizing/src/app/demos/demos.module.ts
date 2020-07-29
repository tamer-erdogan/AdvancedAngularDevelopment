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
import { AuthModule } from '../auth/auth.module';
import { LoggerComponent } from './samples/logger/logger.component';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { ConsoleComponent } from './samples/console/console.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { NgprobeComponent } from './samples/ngprobe/ngprobe.component';
import { WebWorkerComponent } from './samples/web-worker/web-worker.component';
import { SkillsListComponent } from './samples/change-detection/skills-list/skills-list.component';
import { SkillComponent } from './samples/change-detection/skill/skill.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { InjectConfigComponent } from './samples/inject-config/inject-config.component';
import { NgrxCompComponent } from './samples/ngrx-comp/ngrx-comp.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'logger', component: LoggerComponent },
      { path: 'bundles', component: BundlesComponent },
      { path: 'inject-config', component: InjectConfigComponent },
      { path: 'webworker', component: WebWorkerComponent },
      { path: 'ngprobe', component: NgprobeComponent },
      { path: 'debug-statements', component: DebugStatementsComponent },
      { path: 'changedetection', component: ChangeDetectionComponent },
      { path: 'ngrx-comp', component: NgrxCompComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    LoggerComponent,
    BundlesComponent,
    ConsoleComponent,
    ChangeDetectionComponent,
    NgprobeComponent,
    WebWorkerComponent,
    SkillsListComponent,
    SkillComponent,
    DebugStatementsComponent,
    InjectConfigComponent,
    NgrxCompComponent,
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
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, DemosReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [SkillsService],
})
export class DemosModule {}
