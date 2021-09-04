import { Component, OnInit } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  @Emoji() result = 'Hello';
  constructor() { }

  ngOnInit() {
  }
  @Confirmable("您确认要执行吗？") handleClick() {
    console.log('确认执行')
  }
}
