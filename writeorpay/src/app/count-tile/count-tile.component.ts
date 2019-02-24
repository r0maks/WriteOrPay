import { Component, OnInit, Input } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-count-tile',
  templateUrl: './count-tile.component.html',
  styleUrls: ['./count-tile.component.scss']
})
export class CountTileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              data: [50, 50],
              backgroundColor: [
                  'rgba(0,104,56)',
                  'rgba(190, 30, 45)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        tooltips: {
             enabled: false
        }
    }
    });
  }

}
