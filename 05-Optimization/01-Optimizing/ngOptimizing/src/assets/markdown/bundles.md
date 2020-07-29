Investigate `package.json`:

```
 "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "withdb": "concurrently \"json-server --watch db.json\" \"ng serve\"",
    "build:stats": "ng build --statsJson",
    "analyze": "webpack-bundle-analyzer ./dist/ngDemoApp/stats-es2015.json -p 5010"
  },
```

Run `build:stats` and `analyze` using `npm run`.

Find Moment.js and look at its size

Replace Moment.js by date-fns

```
npm install date-fns --save
npm uninstall moment
```

Use the following funcitons:

```
addDays(date, amount)
format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
```

Notice the change in total bundle size
