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
import { UnitTestingComponent } from './samples/simple-tests/unit-testing.component';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { FoodComponent } from './samples/simple-comp/food.component';
import { IntegrationTestComponent } from './samples/integration-tests/integration-test.component';
import { UseMockComponent } from './samples/use-mock/use-mock.component';
import { HttptestsComponent } from './samples/httptests/httptests.component';
import { AsyncComponent } from './samples/async/async.component';
import { MarblesComponent } from './samples/marbles/marbles.component';
import { NgrxComponent } from './samples/ngrx/ngrx.component';
import { DemoRowComponent } from './samples/demo-row/demo-row.component';
import { DemoFilterComponent } from './samples/demo-filter/demo-filter.component';
import { DemoEditComponent } from './samples/demo-edit/demo-edit.component';
import { DemoListComponent } from './samples/demo-list/demo-list.component';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { FoodRowComponent } from './samples/integration-tests/food-row/food-row.component';
import { FoodListComponent } from './samples/integration-tests/food-list/food-list.component';
import { MockStoreComponent } from './samples/mock-store/mock-store.component';
import { PhonenumberPipe } from './samples/pipe/phonenumber.pipe';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'unittesting', component: UnitTestingComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'simplecomp', component: FoodComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: UseMockComponent },
      { path: 'httptests', component: HttptestsComponent },
      { path: 'async', component: AsyncComponent },
      { path: 'marbles', component: MarblesComponent },
      { path: 'ngrx', component: NgrxComponent },
      { path: 'mockstore', component: MockStoreComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    DemoRowComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    UnitTestingComponent,
    TestPipeComponent,
    FoodComponent,
    IntegrationTestComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodComponent,
    FoodRowComponent,
    FoodListComponent,
    UseMockComponent,
    HttptestsComponent,
    AsyncComponent,
    MarblesComponent,
    NgrxComponent,
    MockStoreComponent,
    PhonenumberPipe,
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
