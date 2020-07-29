import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { DemoItem } from '../../../model/demo/DemoItem';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-action-streams',
  templateUrl: './action-streams.component.html',
  styleUrls: ['./action-streams.component.scss']
})
export class ActionStreamsComponent implements OnInit {
  constructor(private ds: DemoService) {}

  // Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getItems();

  // Action Stream
  filter: string;
  private filterSubject = new BehaviorSubject<string>('');
  filter$ = this.filterSubject.asObservable();

  // Stream to bind the view to
  // Allways make sure to take combineLatest from rxjs and NOT rxjs/operators!!!!
  demos$ = combineLatest([this.demosData$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter != ''
        ? demos.filter(d =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  ngOnInit() {}

  handleFilter() {
    console.log(this.filter);
    this.filterSubject.next(this.filter);
  }
}
