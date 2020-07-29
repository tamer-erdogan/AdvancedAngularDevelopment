import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { of, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-lang-features',
  templateUrl: './lang-features.component.html',
  styleUrls: ['./lang-features.component.scss']
})
export class LangFeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  copySpread() {
    //Spred operator on arrays
    var [x, y, ...remaining] = [1, 2, 3, 4];
    console.log('Values x, y', x, y); // 1, 2,
    console.log('Remaining', remaining);

    //Spread operator on objects
    var simplePerson = { name: 'Sepp' };
    var father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [{ name: 'David', age: 12 }, { name: 'Soi', age: 7 }]
    };

    var copiedPerson = { ...father };

    console.log('Spreaded Person:', copiedPerson);

    father.children[0].name = 'Giro';
    console.log('After Change:', copiedPerson);

    var person = { ...simplePerson, ...father };
    console.log('Spread combined Person:', person);
  }

  deepCloning() {
    var father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [{ name: 'David', age: 12 }, { name: 'Soi', age: 7 }]
    };

    var copiedPerson = _.cloneDeep(father);

    console.log('Spreaded Person:', copiedPerson);

    father.children[0].name = 'Giro';
    console.log('After Change:', copiedPerson);
  }

  impureFunction() {
    var name = 'Sandra';

    function greet() {
      name += ', how are you today?';
      console.log(name);
    }

    greet();
    greet();
  }

  pureFunction() {
    function greet(name) {
      return `${name}, how are you today`;
    }

    console.log(greet('Sandra'));
    console.log(greet('Heinz'));
  }

  useDestructuring() {
    let nbrs$ = of(['a', 'b', 'c']);
    let chrs$ = of([1, 2, 3]);

    //when used like here destructuring works like aliasing
    combineLatest(nbrs$, chrs$)
      .pipe(
        tap(console.log),
        map(([nbrs, chars]) => {
          console.log('nbrs:', nbrs);
          console.log('chrs:', chars);
        })
      )
      .subscribe();
  }
}
