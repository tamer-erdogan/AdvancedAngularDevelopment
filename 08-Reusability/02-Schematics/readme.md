# Schematics

[Schematics Overview](https://angular.io/guide/schematics)

[Schematics Starter with Sandbox](https://github.com/schuchard/schematic-starter)

[Schematics Best Practices](https://brenden.codes/posts/angular-schematics-best-practices/)

[AST Explorer](https://astexplorer.net/)

## Advanced Examples

[Adding Jest](https://github.com/briebug/jest-schematic)

[Schematics Prettier](https://github.com/schuchard/prettier-schematic)

[Scaffolding a Service](https://github.com/brandonroberts/ac2019-schematics)

## Getting Started

Install Schematics CLI:

```
npm i -g @angular-devkit/schematics-cli
```

Create a Schematics Project:

```
schematics blank --name=hello
```

Add another Schematic to the same project (from inside the folder):

```
schematics blank --name=helloparam
```

Build & Run Schematics locally:

```
npm run build
schematics .:hello --dry-run false
schematics .:hello-param --name li --greeting Ahoj --dry-run false
schematics .:hello-component --name mycomp --greeting servus --debug false
```

Generate Sandbox from within Schematics project:

```
ng new sandbox
```

Update Scripts:

```
"scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "npm run sandbox:ng-add && npm run test:sandbox",
    "clean": "git checkout HEAD -- sandbox && git clean -f -d sandbox",
    "link:schematic": "npm link && cd sandbox && npm link hello",
    "launch:hello": "cd sandbox && ng g hello:hello",
    "launch:helloparam": "cd sandbox && ng g hello:helloparam --name li --greeting Ahoj --dry-run false"
  },
```

Run in Sandbox:

```
npm run launch:hello
```