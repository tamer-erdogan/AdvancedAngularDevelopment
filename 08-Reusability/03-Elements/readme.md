# Angular Elements

[Angular Elements](https://angular.io/guide/elements)

## Base Web Standards

[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

[Web Templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

> Note: Samples provided in `./custom-elements`

## Getting started:

### Project Setup & Add Elements

```
ng new ngSkillsCE
cd ngSkillsCE
ng add @angular/elements
code .
```

Add Polyfills:

```
npm install -S @webcomponents/webcomponentsjs @webcomponents/custom-elements
```

Add the Polyfills to the polyfills.ts:

```typescript
import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';
```

Add ngx-build-plus:

```
ng add ngx-build-plus
```

### Implement Component designated to be you Custom Element

- Create the Component using: `ng g c skills-list`
- Add it to AppComponent & Implement your Custom Element
- Test using: `ng s -o`

![skills](_images/skills.png)

### Build & Package

Uncomment Content of the AppComponent

Modify App Module:

```typescript
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [SkillslistComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [SkillslistComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SkillslistComponent, {
      injector: this.injector
    });

    customElements.define('ngxe-skills', el);
  }
}
```

> Note: Uncomment everything related to app.component.ts

Add custom build script to npm scripts:

```
 "build-elements": "ng build --prod --keep-polyfills --single-bundle true --output-hashing none"
```

#### Create a Single File Bundle - Optional

If you want to create `ONE SINGLE FILE` you can use an older approach to concat the files:

Install `npm install --save-dev concat fs-extra`

Add `elements-build.js` to root folder

```javascript
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/nge-skills/runtime.js',
    './dist/nge-skills/polyfills.js',
    './dist/nge-skills/scripts.js',
    './dist/nge-skills/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/nge-skills.js');
  await fs.copyFile('./dist/nge-skills/styles.css', 'elements/styles.css');
})();
```

#### Running a Build

Add custom build script in `package.json`:

```
"elements": "ng build --prod --keep-polyfills --single-bundle  true --output-hashing none && node elements-build.js
```

```
npm run elements
```

### Testing Elements Web Component

HTML for Testing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>NgSkillsCE</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <ngxe-skills></ngxe-skills>
    <script src="polyfills-es5.js" nomodule defer></script>
    <script src="polyfills-es2015.js" type="module"></script>
    <script src="scripts.js" defer></script>
    <script src="main-es2015.js" type="module"></script>
    <script src="main-es5.js" nomodule defer></script>
  </body>
</html>
```

#### External Event handling

To handle events raised from your web component use this patter in a custom.js

```javascript
document.addEventListener('DOMContentLoaded', function(event) {
  var el = document.querySelector('#ngxekills');
  el.addEventListener('onSaveSkills', data =>
    console.log('Logging Save from host', data.detail)
  );
});
```

#### Serving

Install a tool that can serve static pages:

```
npm i -g angular-http-server
```

Replace `<app-root></app-root>` in `dist/ngSkillsCE/index.html` with `<ngxe-skills></ngxe-skills>`

In `dist/ngSkillsCE/` run:

```
angular-http-server
```

Navigate to: http://localhost:8080/
