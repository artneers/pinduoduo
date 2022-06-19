import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input() startDate = new Date();
  @Input() futureDate: Date;

  countDown$: Observable<string>;
  constructor() { }

  ngOnInit() {
    this.countDown$ = interval(1000).pipe(
      map(elapse => this.getDiffInSec(this.startDate, this.futureDate) - elapse),
      // tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600 % 24),
        minute: Math.floor(sec / 60 % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${hour}: ${minute}: ${second}`)
    )
  }

  getDiffInSec(start: Date, future: Date):number {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / 1000);
  }

}
