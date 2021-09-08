import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterContentChecked, AfterViewInit } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, OnChanges {

  constructor() { 
    console.log("组件构造调用")
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("组件输入属性改变", changes)
    
  }


  ngOnInit() {
    console.log("组件初始化调用")
  }

  title = '拼多多';
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  // 点击后的文字颜色
  @Input() titleActiveColor = 'yellow';
  // 未点击的文字颜色
  @Input() titleColor = 'blue';
  // 文字下方小横条的颜色
  @Input() indicatorColor = '#fff';
  @Output() tabSelected = new EventEmitter();

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
