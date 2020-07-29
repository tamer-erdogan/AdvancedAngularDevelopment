import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { DemoItem } from "src/app/demos/demo-item.model";
import { map } from "rxjs/operators";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { StatefulDemoService } from "src/app/demos/stateful-demo.service";

@Component({
  selector: "app-statefull",
  templateUrl: "./statefull.component.html",
  styleUrls: ["./statefull.component.scss"]
})
export class StatefullComponent implements OnInit {
  constructor(private ds: StatefulDemoService) {}

  //Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getDemos();

  //Action Stream
  filter: string;
  private filterSubject = new BehaviorSubject<string>("");
  filter$ = this.filterSubject.asObservable();

  //Stream to bind the view to
  demos$ = combineLatest([this.demosData$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter != ""
        ? demos.filter(d =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  ngOnInit() {}

  handleFilter() {
    this.filterSubject.next(this.filter);
  }

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe(arr => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach(item => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    console.log("deleting item", item);
  }

  changeVisibility(item: DemoItem) {
    console.log("change visibility", item);
  }
}
