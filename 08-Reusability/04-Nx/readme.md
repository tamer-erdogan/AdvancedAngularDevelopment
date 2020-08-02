# Monorepos & Nx

[Nx Home](https://nx.dev/angular)

[Nx CLI](https://nx.dev/angular/cli/overview)

[Getting Started](https://nx.dev/angular/getting-started/getting-started)

[Nx Console - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

## Scaffolding

Install nx Cli to be able to use nx command instead of ng:

```
npm i -g @nrwl/schematics @nrwl/cli @nrwl/workspace
```

Create Workspace, Add Angular:

```typescript
npx create-nx-workspace@latest AngularRepo
```

Select Workspace Type & Metadata

![nx-create](_images/nx-create-ws.png)

Build the app `ng-skills`:

```
ng build ng-skills |
nx buils ng-skills
```

> Note: `nx buils ng-skills` uses cache and builds only when there are changes

Test the app using Jest (default)

```
nx test ng-skills
```

Run the app:

```
nx s -o ng-skills
```

## Button Implementation

Add a lib project and a button and a split component to it:

```typescript
ng g @nrwl/angular:lib ux-controls --style=sass
ng g @nrwl/angular:component ux-button --project=ux-controls
ng g component ux-split --project=ux-controls --export --selector=ux-split
```

Add Material to nx workspace:

```
npm install -S @angular/material @angular/cdk @angular/flex-layout @angular/animations
```

Add Material to apps\ng-demo-ui & apps\other-app

```
ng add @angular/material
```

Implement the MaterialModule:

> Note: Just copy a current Module from any Material Sample

Implement the Button:

_.ts & _.html

```typescript
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.onClick.emit();
  }
}
```

```html
<button mat-raised-button (click)="buttonClicked()" [disabled]="disabled">
  <mat-icon>{{ icon }}</mat-icon>
  <span fxHide.lt-lg>{{ label }}</span>
</button>
```

Export the button:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxButtonComponent } from './ux-button/ux-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UxButtonComponent],
  exports: [UxButtonComponent],
})
export class UxSystemModule {}
```

Use the Button in the two projects:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UxSystemModule } from '@ng-demo-app-ws/ux-system';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UxSystemModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Add it to App Component

```html
<ux-button
  [icon]="'bug_report'"
  [label]="'Report Bug'"
  (onClick)="doClick()"
></ux-button>
```

```typescript
export class AppComponent {
  title = 'ng-demo-ui';

  doClick() {
    console.log('you clicked');
  }
}
```

Test the Button:

```
ng serve ng-demo-ui
```

Show Dependency Graph

```
nx dep-graph
```

## Starting with an Empty project:

```typescript
npx create-nx-workspace EmptyRepo --preset=empty
cd empty-repo
npm install --save-dev @nrwl/angular
nx generate @nrwl/angular:app skills-app --e2e-test-runner=cypress --unit-test-runner=jest --style=sass
```

Add two projects:

```typescript
ng g @nrwl/angular:app ng-skills --e2e-test-runner=cypress --unit-test-runner=jest --style=sass
ng g @nrwl/angular:app ng-other
```
