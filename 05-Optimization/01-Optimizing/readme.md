# Optimizing Angular

[Lighthouse](https://developers.google.com/web/tools/lighthouse)

[Angular AOT Compiler](https://angular.io/guide/aot-compiler)

[Angular Debug Statements](https://angular.io/api/core/global)

[Airbnb Style Guide](https://github.com/webdev-tools/tslint-airbnb-styleguide)

[Configuring CommonJS dependencies](https://angular.io/guide/build#configuring-commonjs-dependencies)

## Analyzing Bundles

[Performance Budget Calculator](https://perf-budget-calculator.firebaseapp.com/)

[ngx-quickling - preloading](https://github.com/mgechev/ngx-quicklink)

Replace older Libs with newer:

ie Moment.js with [date-fns](https://date-fns.org/)

Install Source Map Explorer:

```
npm i -S source-map-explorer
```

Create Production Build:

```
ng build --prod
```

Analyze Chunks:

```
source-map-explorer dist/main-es5.28a67cbad0b0a3f17e1e.js
```
