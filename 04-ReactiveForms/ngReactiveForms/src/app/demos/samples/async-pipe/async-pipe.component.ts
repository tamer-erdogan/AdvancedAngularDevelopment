import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent implements OnInit {
  constructor(private ts: TaskService) {}

  tasks$: Observable<Task[]> = this.ts.getTasks();
  completed$: Observable<Task> = this.tasks$.pipe(
    mergeMap((tasks: Task[]) => tasks),
    filter((t) => t.completed)
  );

  ngOnInit() {}
}
