import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-tile',
  templateUrl: './count-tile.component.html',
  styleUrls: ['./count-tile.component.scss']
})
export class CountTileComponent implements OnInit {

  @Input() metricName: string;
  @Input() metricValue: number;

  constructor() { }

  ngOnInit() {
  }

}
