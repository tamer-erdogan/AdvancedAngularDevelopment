import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { ParamSchema } from './paramschema.model';

//run using: npm run build -> schematics .:helloparam --name li --greeting Ahoj --dry-run false

export function helloParam(_options: ParamSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('Running schematics with following options', _options);

    const name = _options.name;
    const greeting = _options.greeting;
    const fn = 'hello.js';

    if (tree.exists(fn)) {
      tree.delete(fn);
    }

    tree.create('hello.js', `console.log('${greeting} ${name}!');`);

    return tree;
  };
}
