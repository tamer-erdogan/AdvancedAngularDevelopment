import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-multi-interceptor',
  templateUrl: './multi-interceptor.component.html',
  styleUrls: ['./multi-interceptor.component.scss'],
})
export class MultiInterceptorComponent implements OnInit {
  constructor(private ds: DemoService) {}

  ngOnInit(): void {}

  httpCall(): void {
    this.ds.getDemos().subscribe();
  }
}
