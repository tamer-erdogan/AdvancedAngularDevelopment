import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngprobe',
  templateUrl: './ngprobe.component.html',
  styleUrls: ['./ngprobe.component.scss']
})
export class NgprobeComponent implements OnInit {
  constructor() {}

  probeValue = 'The world is an oyster';

  ngOnInit() {}
}
