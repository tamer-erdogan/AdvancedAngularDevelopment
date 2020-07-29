import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

//run using: npm run build -> schematics .:hello-component --name mycomp --greeting servus --debug false
export function helloComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('Running schematics with following options', _options);

    const sourceTpl = url('./files');
    const sourceTplParametrized = apply(sourceTpl, [
      template({ ..._options, ...strings, addExclamation })
    ]);

    return mergeWith(sourceTplParametrized)(tree, _context);
  };
}

export function addExclamation(value: string): string {
  return `${value}!`;
}
