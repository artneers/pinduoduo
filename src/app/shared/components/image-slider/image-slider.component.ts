import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  public selectedIndex:number = 0;
  public intervalId: any;
  public intervalBySeconds: number = 2;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @ViewChild('imgSlider', {static: true}) imgSlider: ElementRef;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        "scrollLeft",
        (this.getIndex(++this.selectedIndex) * 
          this.imgSlider.nativeElement.scrollWidth /
          this.sliders.length
        ))
    }, this.intervalBySeconds * 1000)
  }

  // 获取当前所在的图片
  getIndex(index: number) {
    return index >= 0
      ? index % this.sliders.length
      : this.sliders.length - (Math.abs(index) % this.sliders.length);
  }
  // 计算当前所在图片的索引，避免跨多张自动轮播图片
  handleScroll(ev) {
    let radio = ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(radio);
  }
}