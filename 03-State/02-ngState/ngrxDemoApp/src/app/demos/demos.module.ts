import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { SkillsService } from "../model/skills/skills.service";
import { SharedModule } from "../shared/shared.module";
import { UxModule } from "../ux/ux.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { EventbusComponent } from "./samples/eventbus/eventbus.component";
import { StatefullComponent } from "./samples/statefull/container/statefull.component";
import { DemoRowComponent } from "./samples/demo-row/demo-row.component";
import { StoreModule } from "@ngrx/store";
import { demosFeatureKey, DemosReducer } from "./store/reducers/demos.reducer";
import { EffectsModule } from "@ngrx/effects";
import { DemosEffects } from "./store/effects/demos.effects";
import { NgrxCrudComponent } from "./samples/ngrx-crud/ngrx-crud.component";
import { DemoFilterComponent } from "./samples/demo-filter/demo-filter.component";
import { DemoEditComponent } from "./samples/demo-edit/demo-edit.component";
import { DemoListComponent } from "./samples/demo-list/demo-list.component";
import { NgrxFacadesComponent } from "./samples/ngrx-facades/ngrx-facades.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "statefull", component: StatefullComponent },
      { path: "ebus", component: EventbusComponent },
      { path: "ngrx-curd", component: NgrxCrudComponent },
      { path: "facades", component: NgrxFacadesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    StatefullComponent,
    DemoRowComponent,
    EventbusComponent,
    NgrxCrudComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    NgrxFacadesComponent
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
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
